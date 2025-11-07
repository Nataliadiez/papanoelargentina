import { Component } from '@angular/core';

@Component({
  selector: 'app-empresas',
  imports: [],
  template: `
    <section class="py-5">
      <div class="container">
        <h2 class="mb-3">Empresas</h2>
        <p>Recepción, fotos con empleados, acciones de marketing interno y externo…</p>
        <div class="row g-3">
          @for(img of this.arrayImages; track $index){
          <img
            [src]="'/images/empresas/' + img"
            class="img-fluid rounded-3"
            alt="Papá Noel en empresa"
          />
          }
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Empresas {
  arrayImages = ['emp1.webp', 'emp2.webp', 'emp3.webp'];
}
