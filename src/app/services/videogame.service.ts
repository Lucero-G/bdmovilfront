import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videogame } from '../models/videogame';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {
  private baseUrl = 'http://localhost:5000'; // Cambia esta URL si tu API está en un servidor diferente

  constructor(private http: HttpClient) { }

  // Método para sincronizar la caché
  syncCache(count: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/sync-cache`, { count });
  }

  // Método para obtener videojuegos de la caché
  getAllVideogames(): Observable<Videogame[]> {
    return this.http.get<Videogame[]>(`${this.baseUrl}/get-allvideogames`); // Cambia la ruta según tu API
  }
}
