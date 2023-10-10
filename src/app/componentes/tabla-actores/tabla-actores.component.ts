import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent {

 
  @Input() actores : Array<Actor> = [] 
  @Output() ActorSeleccionadoevent = new EventEmitter<any>;
  select(actor:Actor)
  {
    this.ActorSeleccionadoevent.emit(actor);
  }

}
