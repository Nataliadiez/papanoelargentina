import { Component } from '@angular/core';

interface ValueItem {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss',
})
export class NosotrosComponent {
  protected readonly values: ValueItem[] = [
    {
      icon: 'star',
      title: 'Alegría',
      text: 'Creamos momentos que encienden sonrisas.',
    },
    {
      icon: 'diamond',
      title: 'Calidad',
      text: 'Detalles que marcan la diferencia.',
    },
    {
      icon: 'handshake',
      title: 'Compromiso',
      text: 'Cuidamos cada experiencia como propia.',
    },
    {
      icon: 'auto_awesome',
      title: 'Pasión',
      text: 'Vivimos la Navidad todo el año.',
    },
  ];
}
