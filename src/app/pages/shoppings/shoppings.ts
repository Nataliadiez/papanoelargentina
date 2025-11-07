import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppings',
  imports: [],
  template: `
    <section class="py-5">
      <div class="container">
        <h2 class="mb-4">Centros comerciales</h2>
        <ul class="mb-4">
          <li>
            Cencosud: Portal Patagonia, Portal Tucumán, Palmas del Pilar, Portal Rosario, Unicenter.
          </li>
          <li>Solo Papá Noel (sin foto): Portal Los Andes, Trelew, Río Cuarto, Salta, Santiago.</li>
          <li>IRSA: Paseo Alcorta, Bullrich (solo Papá Noel).</li>
        </ul>
        <div class="row g-3">
          <div class="col-6 col-md-4">
            @for(img of this.arrayImages; track $index){
            <img
              [src]="'/images/shoppings/' + img"
              class="img-fluid rounded-3"
              alt="Papá Noel en shopping"
            />
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Shoppings {
  arrayImages = ['2', '3'];
}
