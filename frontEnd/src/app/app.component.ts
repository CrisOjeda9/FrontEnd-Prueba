import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmileComponent } from './smile/smile.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SmileComponent], // Agrega SmileComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dentics';
}
