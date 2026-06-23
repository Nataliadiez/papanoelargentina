import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  private readonly platformId = inject(PLATFORM_ID);

  protected scrolled = false;
  protected opened = false;

  protected readonly items: NavItem[] = [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'shoppings', label: 'Centros comerciales' },
    { id: 'empresas', label: 'Empresas' },
    { id: 'galeria', label: 'Galería' },
    { id: 'clientes', label: 'Clientes' },
    { id: 'contacto', label: 'Contacto' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled = window.scrollY > 20;
  }

  protected toggleMenu(): void {
    this.opened = !this.opened;
  }

  protected closeMenu(): void {
    this.opened = false;
  }
}
