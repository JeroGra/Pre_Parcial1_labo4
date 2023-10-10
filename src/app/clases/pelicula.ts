import { Actor } from "./actor";

export class Pelicula {

    id?:string;
    nombre:string;
    tipo:string;
    fechaEstreno:string;
    cantidadPublico:Number;
    fotos:any = [];
    actores:Array<Actor> = []

    constructor(id:string ="",nombre:string ="",tipo:string ="",fechaEstreno:string="",cantidadPublico:Number=0)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
    }

    toString():string
    {
        return this.id +" - "+this.nombre +" - "+this.tipo +" - "+this.fechaEstreno+" - "+this.cantidadPublico
    }

    ingresarActor(actor:Actor)
    {
        this.actores.push(actor);
    }

    toFirestore()
    {
        return JSON.parse(JSON.stringify(this));
    }

    static insertImage(imgArr:any[],peli:Pelicula)
    {
        console.log(imgArr);
        imgArr.forEach(element => {
            console.log(element);
            peli.fotos.push(element);
        });
    }

}
