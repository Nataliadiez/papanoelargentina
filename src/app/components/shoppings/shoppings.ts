import { Component } from '@angular/core';

type PaymentIcon = 'cash' | 'card' | 'transfer';

interface Shopping {
  name: string;
  province: string;
  date: string;
  schedule: string;
  price: string;
  image: string;
}

interface PaymentMethod {
  label: string;
  icon: PaymentIcon;
}

@Component({
  selector: 'app-shoppings',
  standalone: true,
  imports: [],
  templateUrl: './shoppings.html',
  styleUrl: './shoppings.scss',
})
export class ShoppingsComponent {
  readonly shoppings: Shopping[] = [
    {
      name: 'Portal Patagonia',
      province: 'Neuquén',
      date: 'Del 01/12 al 23/12',
      schedule: 'Lunes a Lunes · 12:00 a 21:00 hs.',
      price: '$15.000',
      image: '/images/shoppings/portal-patagonia.jpg',
    },
    {
      name: 'Portal Rosario',
      province: 'Santa Fé',
      date: 'Del 01/12 al 23/12',
      schedule: 'Lunes a Lunes · 12:00 a 21:00 hs.',
      price: '$15.000',
      image: '/images/shoppings/portal-rosario.jpg',
    },
    {
      name: 'Unicenter',
      province: 'Buenos Aires - Martinez',
      date: 'Del 01/12 al 24/12',
      schedule: 'Lunes a Lunes · 10:00 a 22:00 hs.',
      price: '$15.000',
      image: '/images/shoppings/unicenter.jpg',
    },
    {
      name: 'Palmas del Pilar',
      province: 'Buenos Aires - Pilar',
      date: 'Del 01/12 al 24/12',
      schedule: 'Lunes a Lunes · 12:00 a 21:00 hs.',
      price: '$15.000',
      image: '/images/shoppings/palmas-del-pilar.jpg',
    },
  ];

  readonly payments: PaymentMethod[] = [
    {
      label: 'Efectivo',
      icon: 'cash',
    },
    {
      label: 'Tarjeta',
      icon: 'card',
    },
    {
      label: 'Transferencia',
      icon: 'transfer',
    },
  ];
}
