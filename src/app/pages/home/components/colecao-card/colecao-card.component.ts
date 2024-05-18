import { Component, Input } from '@angular/core';
import { IColecao } from '../../interface/colecao.interface';

@Component({
  selector: 'app-colecao-card',
  standalone: true,
  imports: [],
  templateUrl: './colecao-card.component.html',
  styleUrl: './colecao-card.component.css'
})
export class ColecaoCardComponent {
  @Input({ required: true }) colecao!: Partial<IColecao>;
}
