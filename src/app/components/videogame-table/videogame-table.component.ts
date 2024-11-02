import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideogameService } from '../../services/videogame.service';
import { Videogame } from '../../models/videogame';

@Component({
  selector: 'app-videogame-table',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './videogame-table.component.html',
  styleUrls: ['./videogame-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideogameTableComponent implements OnInit {
  videogames: Videogame[] = [];
  topX: number = 10;      // Valor por defecto
  inputValue: number = 10; // Para el input

  constructor(private videogameService: VideogameService) {}

  ngOnInit(): void {
    this.loadVideogames();
  }

  updateTopX(): void {
    if (this.inputValue > 0) {
      this.topX = this.inputValue;
      this.onSubmit();  // Llama a onSubmit cada vez que se actualiza el valor para verificar la caché y sincronizar si es necesario
    }
  }

  loadVideogames(): void {
    this.videogameService.getAllVideogames().subscribe(
      (data: Videogame[]) => {
        this.videogames = data;
        console.log('Datos cargados:', this.videogames); // Agregar este console.log
      },
      error => {
        console.error('Error fetching videogames', error);
      }
    );
  }
  
  

  onSubmit(): void {
    if (this.inputValue > 0) {
      this.videogameService.getAllVideogames().subscribe(
        (data: Videogame[]) => {
          if (data.length >= this.topX) {
            // Si hay suficientes datos en caché, solo mostramos el topX
            this.videogames = data.slice(0, this.topX);
          } else {
            // Sincroniza si los datos en caché no son suficientes
            this.videogameService.syncCache(this.topX).subscribe(
              () => {
                // Recarga los videojuegos después de la sincronización
                this.loadVideogames();
              },
              error => {
                console.error('Error synchronizing cache', error);
              }
            );
          }
        },
        error => {
          console.error('Error fetching videogames', error);
        }
      );
    } else {
      console.warn('El número ingresado debe ser mayor que 0');
    }
  }
}
