import { Component, OnInit, ChangeDetectorRef, AfterContentChecked  } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { BdActoresService } from 'src/app/servicios/bd-actores.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, ref, listAll, getDownloadURL, uploadString, uploadBytes, uploadBytesResumable } from '@angular/fire/storage'
import { Pelicula } from 'src/app/clases/pelicula';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent {


  public forms : FormGroup

  actor = false;
  minL = 0;

  constructor(private firestore:BdActoresService,private fb : FormBuilder,private changeDetector: ChangeDetectorRef,private sanitizer:DomSanitizer,
  private storage: Storage){
    this.firestore.TraerActores();
    this.forms = this.fb.group({
      nombrePelicula : ['',[
        Validators.required,
        Validators.nullValidator,
        Validators.minLength(5)
      ]],
      tipoPelicula : ['',[
        Validators.required,
        Validators.minLength(5),
      ]],
      fechaPelicula : ['',[
        Validators.required,
      ]],
      publicoPelicula : ['',[
        Validators.required,
        Validators.min(5000)
      ]],
      fotoPelicula :['',[
        Validators.required,
      ]],
      actor :['',[
        Validators.required,
      ]],
    })

    console.log(this.forms.controls['nombrePelicula'])
    this.minL = 5
  }

  OnInit(){
    

  }

  archivos:any = []
  previsualizacion :string = "";
  tipoImagen :string = "";
  imagenesStorage:any = [];
  loading = false;

  capturarFile(event:any):any{
    const archivo  = event.target.files[0]
    this.extraerBase64(archivo).then((image:any) => {
      this.previsualizacion = image.base
    });

    this.tipoImagen = archivo.type;
    this.tipoImagen = this.tipoImagen.slice(6);
    this.archivos.push(archivo)
    //console.log( event.target.files[0]);
  }

  //@ts-ignore
  extraerBase64 = async ($event:any) => new Promise((resolve, reject) => {

    try {
      const unsafeImage = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImage);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () =>{
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base:null
        });
      };
    }
    catch(e){
      return null;
    }

  })


actoresArr = this.firestore.actores
nombre = "";
tipo = "";
fechaEstreno:any;
cantidadPublico = 0 ;
foto:any
actorSelec:Actor = new Actor;
imgPais = "";
peli = new Pelicula

ObtenerActorSelecionada(actor:Actor)
{
  this.actorSelec = actor;
  this.imgPais = this.actorSelec.pais.flags.png;
  this.actor = true;
}

/// OP FNALES //////////////////////////////////////////////////////

borrar()
{
  this.actorSelec = new Actor
  this.actor = false;
  this.nombre = "";
  this.tipo = "";
  this.fechaEstreno = "";
  this.cantidadPublico = 0
}

subirArchivo():any{
  this.loading = true;
  this.archivos.forEach((file:any) => {
    
    const imgRef = ref(this.storage,`imagenes/${this.nombre}.${this.tipoImagen}`);

    uploadBytes(imgRef,file).then(
      (r:any) => console.log(r)
    ).catch(e => console.log(e));
    
  });
}

getImagenes(){
  const imgRef = ref(this.storage,'imagenes');
  listAll(imgRef).then(
    async imgList => {

           imgList.items.forEach( async (img:any) => {

          let url = await getDownloadURL(img)
          let imagen = {
            url:url,
            nombre:img.name
          }
          let name = imagen.nombre.slice(0,this.nombre.length);
          console.log(name)
          console.log(this.nombre)
          console.log(this.nombre == name)
    
          if(name === this.nombre)
          {
            this.peli.fotos.push(imagen);
            console.log(this.peli.fotos);
          }
        });

    }).catch(e => console.log(e));
}

obtenerImagenPeliStorage(files:any)
{

}

Registrar()
{
  this.subirArchivo();
   setTimeout(()=>{
     this.getImagenes();
     this.peli.cantidadPublico = this.cantidadPublico;
     this.peli.fechaEstreno = this.fechaEstreno;
     this.peli.nombre = this.nombre;
     this.peli.tipo = this.tipo;
     this.peli.ingresarActor(this.actorSelec);
     setTimeout(()=>{
      this.firestore.AltaPeliculas(this.peli)
      this.borrar();
      this.loading = !true;
    },1000)
   },3000)
}
}
