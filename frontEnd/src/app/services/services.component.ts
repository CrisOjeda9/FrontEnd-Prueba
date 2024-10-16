import { Component } from '@angular/core';
import { SmileComponent } from '../smile/smile.component';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SmileComponent], // Agrega SmileComponent aquí
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class ServicesComponent {
  title = 'Servicios';
}
