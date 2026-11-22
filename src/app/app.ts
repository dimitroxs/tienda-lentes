import { Product } from './product';
import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlassesCard } from './glasses-card/glasses-card';
import { Glasses } from './glasses';

@Component({
  selector: 'app-root',
  imports: [GlassesCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private GlassesService = inject(Glasses);
  Glasses: Product[] = this.GlassesService.getGlasses();
}
