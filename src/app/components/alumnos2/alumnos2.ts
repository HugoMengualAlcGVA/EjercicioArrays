import { Component, inject } from '@angular/core';
import { AlumnosService } from '../../services/alumnos-service';

@Component({
  selector: 'app-alumnos2',
  imports: [],
  templateUrl: './alumnos2.html',
  styleUrl: './alumnos2.css'
})
export class Alumnos2 {
  /*constructor(private miServicio: AlumnosService) { }*/ //Para verisones de Angular inferiores a v.15
  miServicio = inject(AlumnosService) 

  readAnswer(p: string): string{
    let answer = prompt(p);
    if(answer != null && answer !="") return answer; else{
      alert("No se introdujo ningun nombre");
      return ""
    } 
  }

  ver(){
    let nombreAlumno: string = this.readAnswer("Nombre alumno");
    this.miServicio.verNotasAlumno(nombreAlumno);
  }

  notas(){}

  sube(){}

  ciudad(){}

  cusrso(){}

  edad(){}

}
