export class Actor {

    id?:string
    nombre:string
    apellido:string
    pais:any

    constructor(nombre:string = "", apellido:string = "")
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    setDatos(nombre:string,apellido:string,pais:any)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
}
