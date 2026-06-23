import { Component } from '@angular/core';

interface GalleryItem {
  title: string;
  image: string;
  wide?: boolean;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent {
  protected readonly photos: GalleryItem[] = [
    { title: 'Encuentro mágico', image: '/images/gallery/gallery-1.webp' },
    { title: 'Papá Noel saludando', image: '/images/gallery/gallery-2.webp', wide: true },
    { title: 'Foto familiar', image: '/images/gallery/gallery-3.webp' },
    { title: 'Sonrisas navideñas', image: '/images/gallery/gallery-4.webp' },
    { title: 'Recuerdo especial', image: '/images/gallery/gallery-5.webp' },
    { title: 'Momento en familia', image: '/images/gallery/gallery-6.webp' },
    { title: 'Navidad en shopping', image: '/images/gallery/gallery-7.webp' },
  ];
}
