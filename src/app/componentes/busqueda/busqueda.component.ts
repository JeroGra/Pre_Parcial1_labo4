import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { BdActoresService } from 'src/app/servicios/bd-actores.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private ruta:Router, private dataBase : BdActoresService){}
  //Hardcode Peliculas
  arrayPeliculas:any = [];
  //Variables
  altaActor = false;
  peliculaSelecionada:Pelicula = new Pelicula();
  mostrarlistado:boolean=false;
  mostrarocultar = "Mostrar listado Peliculas"

  //Funciones
  ngOnInit(): void {
    this.dataBase.TraerPeliculas();
    this.arrayPeliculas = this.dataBase.peliculas;
  }

  MostrarPeliculas(){
    if(this.mostrarlistado)
    {
      this.mostrarlistado = false;
      this.mostrarocultar = "Mostrar listado Peliculas"
    }
    else
    {
      this.mostrarlistado = true;
      this.mostrarocultar = "Ocultar listado Peliculas"
    }
  }
  ObtenerPeliculaSelecionada(pelicula:Pelicula)
  {
    this.peliculaSelecionada = pelicula;
    console.log(this.peliculaSelecionada);
  }

  LimpiarPelicula()
  {
    this.peliculaSelecionada = new Pelicula();
  }

  AltaActores()
  {
    //this.ruta.navigateByUrl("actor/alta");
    if(this.altaActor)
    {
      this.altaActor = false;
    }
    else{
      this.altaActor = true;
    }
  }
  
}
