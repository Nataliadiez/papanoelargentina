import { Component } from '@angular/core';

interface ServiceItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-empresas',
  standalone: true,
  templateUrl: './empresas.html',
  styleUrl: './empresas.scss',
})
export class EmpresasComponent {
  protected readonly services: ServiceItem[] = [
    { icon: '🎁', label: 'Eventos corporativos' },
    { icon: '▤', label: 'Activaciones de marca' },
    { icon: '🎄', label: 'Experiencias navideñas' },
    { icon: '☑', label: 'Producción integral' },
  ];
}
