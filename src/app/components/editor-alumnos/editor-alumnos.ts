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

  ordenaEdad(){
    this.alumnos.sort((a, b) => a.edad - b.edad);
    console.log(this.alumnos);
  }

  ordenaNombresAsc(){
    this.alumnos.sort((a, b) => {
      if(a.nombre > b.nombre) return 1
      if(a.nombre < b.nombre) return -1
      return 0
    });
  }

  ordenaNombresDesc(){
    this.ordenaNombresAsc();
    this.alumnos.reverse();
    console.log(this.alumnos);
  }

  borraAlumno(){
    let result = this.alumnos.findIndex(
        a => a.nombre==this.readAnswer("Inserta el nombre del alumno")
    );
    if (result != -1){
      this.alumnos.splice( result, 1);
      console.log(this.alumnos);
    } else console.log("El alumno no existe");
  }

  nuevoAlumno(){
    let codigo: string = this.readAnswer("Codigo del alumno:");
    let nombre: string = this.readAnswer("Nombre del alumno:");
    let ciudad: string = this.readAnswer("Ciudad del alumno:");
    let edad: number = Number.parseInt(this.readAnswer("Edad del alumno"));

    if(!Number.isNaN(edad)){
      this.alumnos.push({codigo, nombre, ciudad, calificaciones: [], edad});
      console.log(this.alumnos);
    }else alert("Edad introducida no es valida")
  }

  nuevaAsignatura(){
    let nombre: string = this.readAnswer("Nombre del alumno:");
    let alumno =  this.alumnos.find(a => a.nombre == nombre);

    if(alumno != undefined){
      let asignatura: string = this.readAnswer("Nombre de la asignatura:");
      let nota: number = Number.parseInt(this.readAnswer("Nota del alumno:"));
      if (!isNaN(nota)){
        let a = alumno.calificaciones.find(a => a.asignatura == asignatura);
        if (a == undefined){
          alumno.calificaciones.push({asignatura, nota});
          console.log(alumno.calificaciones);
        }else a.nota = nota;
      }else console.log("Edad introducidad no es valida");
    }else console.log("El alumno no existe");
  }
}
