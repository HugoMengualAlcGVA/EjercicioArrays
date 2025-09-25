import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ALUMNOS } from '../../Modelos/alumnos';

@Component({
  selector: 'app-editor-alumnos',
  imports: [],
  templateUrl: './editor-alumnos.html',
  styleUrl: './editor-alumnos.css'
})
export class EditorAlumnos {
  alumnos = ALUMNOS
  nombreAlumno: string = ""

  readNombreAlumno(){
    var answer = prompt("Nombre del alumno")
    answer != null && answer !=""? this.nombreAlumno=answer : alert("No se introdujo ningun nombre")
  }

  verNotasAlumno(){
    var notaAlumno
    this.readNombreAlumno()
    //notaAlumno = this.alumnos.find(a=>a.nombre==this.nombreAlumno)?.calificaciones
  }
}
