import { Component } from '@angular/core';
import { CitaComponent } from '../cita/cita.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CitaComponent], // Agrega CitaComponent aquí
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class ClienteComponent {
}
