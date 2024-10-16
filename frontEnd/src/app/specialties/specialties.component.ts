import { Component } from '@angular/core';
import { SmileComponent } from '../smile/smile.component';
import { HistoryComponent } from '../history/history.component'; // Importa HistoryComponent

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [SmileComponent, HistoryComponent], // Agrega ambos componentes aquí
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class SpecialtiesComponent {
}
