import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroRoot', { static: true })
  private readonly heroRoot!: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private gsapContext?: gsap.Context;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    this.gsapContext = gsap.context(() => {
      const root = this.heroRoot.nativeElement;
      const animatedItems = root.querySelectorAll<HTMLElement>('.hero-animate');
      const background = root.querySelector<HTMLElement>('.hero__bg');

      gsap.set(animatedItems, {
        autoAlpha: 0,
        y: 24,
      });

      gsap.timeline({ defaults: { ease: 'power3.out' } }).to(animatedItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.12,
      });

      if (background) {
        gsap.to(background, {
          scale: 1.07,
          yPercent: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, this.heroRoot.nativeElement);
  }

  ngOnDestroy(): void {
    this.gsapContext?.revert();
  }
}
