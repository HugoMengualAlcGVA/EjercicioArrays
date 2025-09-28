import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ALUMNOS } from '../../models/alumnos';

@Component({
  selector: 'app-editor-alumnos',
  imports: [],
  templateUrl: './editor-alumnos.html',
  styleUrl: './editor-alumnos.css'
})
export class EditorAlumnos {
  alumnos = ALUMNOS;

  readAnswer(p: string): string{
    let answer = prompt(p);
    if(answer != null && answer !="") return answer; else{
      alert("No se introdujo ningun nombre");
      return ""
    } 
  }

  verNotasAlumno(){
    let nombreAlumno: string = this.readAnswer("Inserta el nombre del alumno");
    if (nombreAlumno!=""){
      let alumno = this.alumnos.find(a=>a.nombre==nombreAlumno);
      if(alumno!=undefined){
        let maxNota: number = 0;
        let asiganaturaMaxNota: string = "";
        let minNota: number = 10;
        let asiganaturaMinNota: string = "";
        let mediaNota: number = 0;

        alumno.calificaciones.forEach(n => {
          mediaNota += n.nota
          if (maxNota < n.nota){
            maxNota = n.nota;
            asiganaturaMaxNota = n.asignatura;
          } 
          if (minNota > n.nota){
            minNota = n.nota
            asiganaturaMinNota = n.asignatura
          }
        });
        mediaNota = mediaNota/alumno.calificaciones.length
        console.log(
          "Nota media: "+mediaNota+" | Mejor nota: "+asiganaturaMaxNota+", "+maxNota+
          " | Peor nota: "+asiganaturaMinNota+", "+minNota
        );
      }else console.log("El alumno no existe");
    }
  }

  subeUnPunto(){
    this.alumnos.forEach(a => {
      a.calificaciones.forEach(c => {
        if (c.nota<10) c.nota++
      });
    });
    console.log(this.alumnos)
  }

  alumnosCiudad(){
    let nombreCiudad: string = this.readAnswer("Inserta el nombre de la ciudad");
    let listaAlumnos: string[] = [];
    if(nombreCiudad!=""){
      this.alumnos.filter(a => a.ciudad==nombreCiudad).forEach(a => listaAlumnos.push(a.nombre))
      console.log(listaAlumnos);
    }
  }

  alumnosCurso(){
    let curso: string = this.readAnswer("Curso:");
    let listaAlumnos: string[] = [];
    if(curso!=""){
      this.alumnos.filter(a => a.codigo.split("-")[2]==curso).forEach(a => listaAlumnos.push(a.nombre))
      console.log(listaAlumnos);
    }
  }
}
