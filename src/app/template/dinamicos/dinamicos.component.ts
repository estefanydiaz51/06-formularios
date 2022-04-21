import { Component, OnInit, ViewChild } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos:  Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Estefany',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear'
      },
      {
        id: 2,
        nombre: 'DeathStranding'
      }
    ]
  }

  nuevoJuego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push( {...nuevoFavorito});
    this.nuevoJuego = '';
  }


  eliminar (index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar () {
    console.log( 'Guardado' );
    
  }

}
