import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Nosotros } from '../nosotros/nosotros';
import { Shoppings } from '../shoppings/shoppings';
import { Empresas } from '../empresas/empresas';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Nosotros, Shoppings, Empresas, Contacto],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
