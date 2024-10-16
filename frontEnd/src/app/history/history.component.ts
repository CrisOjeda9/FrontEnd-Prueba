import { Component } from '@angular/core';
import { ClienteComponent } from '../cliente/cliente.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ClienteComponent], // Agrega ClienteComponent aquí
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class HistoryComponent {
}
