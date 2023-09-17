import { Component , Input, Output,OnChanges,SimpleChanges} from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent{

  @Input() pelicula : Pelicula = new Pelicula();
}
