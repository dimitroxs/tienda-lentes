import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class Glasses {
  getGlasses(): Product[] {
  return[
    {
   name: "lentes azules",
   description: "",
   image: "/assest/lentes.jpg",
   price: 200000,
    },
  ];
  }
}
