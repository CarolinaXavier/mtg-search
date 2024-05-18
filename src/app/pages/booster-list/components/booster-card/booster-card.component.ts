import { Component, Input } from '@angular/core';
import { IBoosterItem } from '../../../home/interface/booster-item.interface';

@Component({
  selector: 'app-booster-card',
  standalone: true,
  imports: [],
  templateUrl: './booster-card.component.html',
  styleUrl: './booster-card.component.css'
})
export class BoosterCardComponent {
  @Input({ required: true }) booster!: Partial<IBoosterItem>;
}
