import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  //Hardcode Peliculas
  arrayPeliculas = [
    {
      "id":"10",
      "nombre":"Harry Potter",
      "tipo":"otro",
      "fechaEstreno":"29/11/2001",
      "cantidadPublico":10000,
      "foto":"../../../assets/imagenes/hp.png"
    },
    {
      "id":"1",
      "nombre":"The Lord of the Rings",
      "tipo":"otro",
      "fechaEstreno":"31/1/2002",
      "cantidadPublico":5000,
      "foto":"../../../assets/imagenes/lor.png"
    },
    {
      "id":"100",
      "nombre":"X",
      "tipo":"accion",
      "fechaEstreno":"12/12/2023",
      "cantidadPublico":1,
      "foto":""
    }
  ];
  //Variables
  peliculaSelecionada:Pelicula = new Pelicula();
  mostrarlistado:boolean=false;
  mostrarocultar = "Mostrar listado Peliculas"

  //Funciones
  ngOnInit(): void {
    localStorage.setItem("peliculas",JSON.stringify(this.arrayPeliculas));
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
  
}
