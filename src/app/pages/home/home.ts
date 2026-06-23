import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeroComponent } from '../../components/hero/hero';
import { NosotrosComponent } from '../../components/nosotros/nosotros';
import { ShoppingsComponent } from '../../components/shoppings/shoppings';
import { GalleryComponent } from '../../components/gallery/gallery';
import { ClientsComponent } from '../../components/clients/clients';
import { EmpresasComponent } from '../../components/empresas/empresas';
import { ContactoComponent } from '../../components/contacto/contacto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    NosotrosComponent,
    ShoppingsComponent,
    GalleryComponent,
    ClientsComponent,
    EmpresasComponent,
    ContactoComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private ctx?: gsap.Context;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    this.ctx = gsap.context(() => {
      this.animateHero();
      this.animateReveals();
      this.animateStaggers();
      this.animateParallax();
    });
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }

  private animateHero(): void {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .from('.js-hero-item', {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
      })
      .from(
        '.js-santa',
        {
          x: 72,
          y: 22,
          opacity: 0,
          scale: 0.96,
          duration: 1.05,
        },
        '-=0.72'
      );
  }

  private animateReveals(): void {
    gsap.utils.toArray<HTMLElement>('.js-reveal').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        y: 34,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  }

  private animateStaggers(): void {
    gsap.utils.toArray<HTMLElement>('[data-gsap-stagger]').forEach((container) => {
      const children = Array.from(container.children);

      gsap.from(children, {
        scrollTrigger: {
          trigger: container,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.68,
        stagger: 0.08,
        ease: 'power3.out',
      });
    });
  }

  private animateParallax(): void {
    gsap.utils.toArray<HTMLElement>('.js-parallax').forEach((element) => {
      const speed = Number(element.dataset['speed'] ?? 0.1);

      gsap.to(element, {
        yPercent: speed * -100,
        ease: 'none',
        scrollTrigger: {
          trigger: element.closest('section') ?? element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }
}
