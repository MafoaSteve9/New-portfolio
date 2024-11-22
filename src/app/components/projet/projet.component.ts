import { Component } from '@angular/core';
import { Details, MOCK_DETAILS_PROJET } from '../../interface/details_projet';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {
 details: Details[] = MOCK_DETAILS_PROJET;
}
