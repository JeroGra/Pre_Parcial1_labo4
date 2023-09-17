import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  @Input() peliculas :Array<any> = [];
  @Output() PeliculaSelecionadaEvent = new EventEmitter<Pelicula>;

  select(pelicula:Pelicula)
  {
    this.PeliculaSelecionadaEvent.emit(pelicula);
  }
}
