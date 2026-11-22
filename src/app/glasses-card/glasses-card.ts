import { Component,input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-glasses-card',
  imports: [CurrencyPipe],
  templateUrl: './glasses-card.html',
  styleUrl: './glasses-card.css',
})
export class GlassesCard {
  name = input.required<string>();
 description = input.required<string>();
 image = input.required<string>();
 price = input.required<number>();
}
