import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorAlumnos } from "./components/editor-alumnos/editor-alumnos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EditorAlumnos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EjercicioArrays');
}
