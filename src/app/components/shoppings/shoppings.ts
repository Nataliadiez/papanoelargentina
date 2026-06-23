import { Component } from '@angular/core';

interface ShoppingCard {
  name: string;
  province: string;
  date: string;
  schedule: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-shoppings',
  standalone: true,
  templateUrl: './shoppings.html',
  styleUrl: './shoppings.scss',
})
export class ShoppingsComponent {
  protected readonly shoppings: ShoppingCard[] = [
    {
      name: 'Córdoba Shopping',
      province: 'Córdoba',
      date: 'Del 30/11 al 24/12',
      schedule: 'Lunes a Domingo · 15:00 a 21:00',
      price: '$8.000',
      image: '/images/shoppings/cordoba-shopping.webp',
    },
    {
      name: 'Alto Avellaneda',
      province: 'Buenos Aires',
      date: 'Del 30/11 al 24/12',
      schedule: 'Lunes a Domingo · 15:00 a 21:00',
      price: '$8.000',
      image: '/images/shoppings/alto-avellaneda.webp',
    },
    {
      name: 'Portal Rosario',
      province: 'Santa Fe',
      date: 'Del 30/11 al 24/12',
      schedule: 'Lunes a Domingo · 15:00 a 21:00',
      price: '$8.000',
      image: '/images/shoppings/portal-rosario.webp',
    },
    {
      name: 'Dot Baires Shopping',
      province: 'Buenos Aires',
      date: 'Del 30/11 al 24/12',
      schedule: 'Lunes a Domingo · 15:00 a 21:00',
      price: '$8.000',
      image: '/images/shoppings/dot-baires.webp',
    },
  ];

  protected readonly payments = ['Efectivo', 'Tarjeta', 'Transferencia'];
}
