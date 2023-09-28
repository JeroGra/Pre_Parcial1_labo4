import { Injectable } from '@angular/core';
import { Firestore, } from '@angular/fire/firestore';
import { getDocs,setDoc,addDoc,collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BdActoresService {

  constructor(private firestore:Firestore) { }

  AltaActor(actor:any)
  {
    const coleccion = collection(this.firestore,'actores')
    addDoc(coleccion,actor);
  }
}
