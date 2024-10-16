import { Component } from '@angular/core';
import { ClienteComponent } from '../cliente/cliente.component'; // Asegúrate de que la ruta sea correcta
import { DoctoresComponent } from '../doctores/doctores.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ClienteComponent, DoctoresComponent], // Agrega ClienteComponent aquí
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class HistoryComponent {
}
