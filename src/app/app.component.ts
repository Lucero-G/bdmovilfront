import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideogameTableComponent } from './components/videogame-table/videogame-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideogameTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bdmovilfront';
}