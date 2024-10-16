import { Component } from '@angular/core';
import { HistoryComponent } from '../history/history.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-smile',
  standalone: true,
  imports: [HistoryComponent], // Agrega HistoryComponent aquí
  templateUrl: './smile.component.html',
  styleUrls: ['./smile.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class SmileComponent {
}
