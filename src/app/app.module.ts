import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
