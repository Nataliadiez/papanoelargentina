import { Component, AfterViewInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { loadSlim } from 'tsparticles-slim';
import { tsParticles } from 'tsparticles-engine';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [RouterLink],
})
export class Hero implements AfterViewInit {
  scrollY = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.scrollY = window.scrollY;
  }

  getParallax(speed: number): string {
    return `translate3d(0, ${this.scrollY * speed}px, 0)`;
  }

  getSantaParallax(): string {
    const yMove = this.scrollY * 0.35;
    const xMove = this.scrollY * 0.15;
    return `translate3d(${xMove}px, ${yMove}px, 0)`;
  }

  getTrineoParallax(): string {
    const xMove = this.scrollY * 1.5;
    const yMove = this.scrollY * -0.2;
    return `translate3d(${xMove}px, ${yMove}px, 0)`;
  }

  async ngAfterViewInit() {
    await loadSlim(tsParticles);

    tsParticles.load('snowParticles', {
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      particles: {
        number: { value: 100, density: { enable: true, area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.8, random: true },
        size: { value: { min: 1, max: 4 } },
        move: {
          direction: 'bottom',
          enable: true,
          speed: { min: 1, max: 3 },
          straight: false,
        },
      },
      detectRetina: true,
    });
  }
}
