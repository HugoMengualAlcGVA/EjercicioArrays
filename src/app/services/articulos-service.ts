import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  constructor() { }
  
  articulos: Articulo[] = ARTICULOS
  getArticulos() {
    return this.articulos
  }
  getArticulo(id: string) {
    let pos = this.articulos.findIndex(a => a.id == id)
    return this.articulos[pos]
  }
  postArticulo(articulo: Articulo) {
    let pos = this.articulos.findIndex(a => a.id == articulo.id)
    if (pos == -1)
      this.articulos.push(articulo)
    else
      alert("Ya existe un artículo con ese id")
  }
  putArticulo(articulo: Articulo) {
    let pos = this.articulos.findIndex(a => a.id == articulo.id)
    this.articulos[pos] = articulo
  }
  deleteArticulo(id: string) {
    let pos = this.articulos.findIndex(a => a.id == id)
    this.articulos.splice(pos, 1)
  }

}
