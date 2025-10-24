import { Component, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

type SectionId = 'hero' | 'nosotros' | 'shoppings' | 'empresas' | 'contacto';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  imports: [RouterLink],
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit, OnDestroy {
  activeId: SectionId = 'hero';
  private observer?: IntersectionObserver;

  // Etiquetas y orden de las secciones
  sections: { id: SectionId; label: string }[] = [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'shoppings', label: 'Centros comerciales' },
    { id: 'empresas', label: 'Empresas' },
    { id: 'contacto', label: 'Contacto' },
  ];

  // Para sombra al hacer scroll
  scrolled = false;

  ngAfterViewInit(): void {
    const navHeight =
      Number(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height')
          .replace('px', '')
      ) || 80;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) this.activeId = e.target.id as SectionId;
        });
      },
      // rootMargin negativo arriba = “activar” apenas asoma bajo el navbar
      { rootMargin: `-${navHeight}px 0px -60% 0px`, threshold: 0.1 }
    );

    // Observamos TODAS, incluido hero
    (['hero', 'nosotros', 'shoppings', 'empresas', 'contacto'] as SectionId[]).forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });

    this.updateScrolled();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateScrolled();
  }

  private updateScrolled() {
    this.scrolled = (window.scrollY || document.documentElement.scrollTop || 0) > 4;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
