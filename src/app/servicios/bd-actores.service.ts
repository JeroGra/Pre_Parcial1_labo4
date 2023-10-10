import { Injectable } from '@angular/core';
import { Firestore, } from '@angular/fire/firestore';
import { getDocs,setDoc,addDoc,collection } from 'firebase/firestore';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class BdActoresService {

  actores : Array<Actor> = new Array<Actor>
  peliculas: Array<Pelicula> = []

  constructor(private firestore:Firestore) { }

  AltaActor(actor:any)
  {
    const coleccion = collection(this.firestore,'actores')
    addDoc(coleccion,actor);
  }

  async TraerActores()
  {
    let arrActores:any = []
    const coleccion = collection(this.firestore,'actores')
    const docs = await getDocs(coleccion);
    docs.forEach((doc) => {
      let actor:any = doc.data();
      actor.id = doc.id;
      arrActores.push(actor);
    });
    this.setArrActor(arrActores);
  }

  setArrActor(arr:any)
  {
    if(this.actores.length > 0)
    {
      for(let i = 0; i < this.actores.length;i++)
      {
        this.actores.pop();
      }
    }
    arr.forEach((obj:any) => {
      this.actores.push(obj as Actor)
    });
  }

  AltaPeliculas(pelicula:Pelicula)
  {
    const coleccion = collection(this.firestore,'peliculas')
    addDoc(coleccion,pelicula.toFirestore());
    this.TraerPeliculas()
  }

  async TraerPeliculas()
  {
    this.peliculas = []
    const coleccion = collection(this.firestore,'peliculas')
    const docs = await getDocs(coleccion);
    docs.forEach((doc) => {
      let peli:any = doc.data();
      peli.id = doc.id;
      this.peliculas.push(peli);
    });

    this.peliculas = JSON.parse(JSON.stringify(this.peliculas)) as Array<Pelicula>
  }
}
