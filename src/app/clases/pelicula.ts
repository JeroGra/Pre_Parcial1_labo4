export class Pelicula {

    id:string;
    nombre:string;
    tipo:string;
    fechaEstreno:string;
    cantidadPublico:Number;
    foto:string;

    constructor(id:string ="",nombre:string ="",tipo:string ="",fechaEstreno:string="",cantidadPublico:Number=0,foto="")
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.foto = foto;
    }

    toString():string
    {
        return this.id +" - "+this.nombre +" - "+this.tipo +" - "+this.fechaEstreno+" - "+this.cantidadPublico
    }

}
