import { Component } from '@angular/core';
import { SuscripcionComponent } from '../suscripcion/suscripcion.component';

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [SuscripcionComponent],
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.css'
})
export class CitaComponent {

}
