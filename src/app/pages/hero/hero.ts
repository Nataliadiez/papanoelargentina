import { Component, AfterViewInit } from '@angular/core';
import { loadSlim } from 'tsparticles-slim';
import { tsParticles } from 'tsparticles-engine';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  async ngAfterViewInit() {
    await loadSlim(tsParticles);

    tsParticles.load('snowParticles', {
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: '#fff' },
        shape: { type: 'circle' },
        opacity: { value: 0.8, random: true },
        size: { value: { min: 1, max: 3 } },
        move: {
          direction: 'bottom',
          enable: true,
          speed: { min: 0.5, max: 2 },
          straight: false,
        },
      },
      interactivity: { events: {} },
      detectRetina: true,
    });
  }
}
