import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Nosotros } from '../../sections/nosotros/nosotros';
import { Shoppings } from '../../sections/shoppings/shoppings';
import { Empresas } from '../../sections/empresas/empresas';
import { Contacto } from '../../sections/contacto/contacto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Nosotros, Shoppings, Empresas, Contacto],
  template: `
    <app-hero id="home" class="section-anchor"></app-hero>
    <app-nosotros id="nosotros" class="section-anchor"></app-nosotros>
    <app-shoppings id="shoppings" class="section-anchor"></app-shoppings>
    <app-empresas id="empresas" class="section-anchor"></app-empresas>
    <app-contacto id="contacto" class="section-anchor"></app-contacto>
  `,
})
export class Home {}
