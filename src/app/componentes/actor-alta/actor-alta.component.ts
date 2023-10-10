import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdActoresService } from 'src/app/servicios/bd-actores.service';
import { PaisesServiceService } from 'src/app/servicios/paises-service.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  constructor(private servicioPaises:PaisesServiceService, private ruta:Router, private firebase:BdActoresService){}

  alertaMensajeBien = ""
  alertaMensaje = "";
  nombreActor=""
  apellidoActor=""
  nombrePais = "";
  imgPais = "";
  
  arrayPaises : Array<any> = []
  paisSeleccionado : any;
  ngOnInit(): void {

    const rtPaises = this.servicioPaises.TraerPaises();
    const sub = rtPaises.subscribe((rt)=>{

      console.log(rt);
     let paises = rt as Array<any>;
      for(let i = paises.length; i > 10;i--)
      {
        let rt = paises.pop();
      }

      this.arrayPaises = paises as Array<any>;
      console.log(this.arrayPaises);
    })
  }
  ObtenerPaisSelecionada(pais:any)
  {
    this.paisSeleccionado = pais;
    console.log(this.paisSeleccionado);
    this.nombrePais = this.paisSeleccionado.name.common;
    this.imgPais = this.paisSeleccionado.flags.png;
  }

  CargarActor()
  {
    if(this.nombreActor != "" && this.apellidoActor != "" && this.nombrePais != "")
    {

      if(isNaN(parseInt(this.nombreActor)) && isNaN(parseInt(this.apellidoActor)))
      {
        let actor = {
          nombre:this.nombreActor,
          apellido:this.apellidoActor,
          pais:this.paisSeleccionado
        }

        this.firebase.AltaActor(actor);
        console.log(actor);
        this.alertaMensajeBien = "Actor Registrado";
        setTimeout(()=>{
          this.alertaMensajeBien = "";
          this.nombreActor="";
          this.apellidoActor="";
          this.nombrePais = "";
          this.imgPais = "";
        },2000)
      }
      else
      {
        this.alertaMensaje = "Los Datos no deben ser numericos";
        setTimeout(()=>{
          this.alertaMensaje = "";
        },2000)
      }
    }
    else{

      this.alertaMensaje = "Faltan Datos";
      setTimeout(()=>{
        this.alertaMensaje = "";
      },2000)

    }
  }
}
