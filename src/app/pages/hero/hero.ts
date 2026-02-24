// hero.ts
import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { loadSlim } from 'tsparticles-slim';
import { tsParticles } from 'tsparticles-engine';
import type { Container, ISourceOptions } from 'tsparticles-engine';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [RouterLink],
})
export class Hero implements AfterViewInit, OnDestroy {
  readonly particlesId: string = 'snowParticles';

  private static enginePromise: Promise<void> | null = null;
  private container: Container | undefined;

  private visibilityHandler = () => this.onVisibilityChange();
  private focusHandler = () => this.onFocusBack();

  scrollY = 0;

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY || 0;
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

  async ngAfterViewInit(): Promise<void> {
    await this.ensureParticlesEngine();

    // Hooks de navegador: tab dormida / volver
    document.addEventListener('visibilitychange', this.visibilityHandler, { passive: true });
    window.addEventListener('focus', this.focusHandler, { passive: true });

    await this.initParticles();
  }

  ngOnDestroy(): void {
    document.removeEventListener('visibilitychange', this.visibilityHandler);
    window.removeEventListener('focus', this.focusHandler);

    this.destroyParticles();
  }

  private async ensureParticlesEngine(): Promise<void> {
    if (!Hero.enginePromise) {
      Hero.enginePromise = loadSlim(tsParticles);
    }
    await Hero.enginePromise;
  }

  private getParticlesOptions(): ISourceOptions {
    return {
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
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
    };
  }

  private async initParticles(): Promise<void> {
    // Esperar layout
    await this.nextFrame();

    // Limpiar cualquier instancia colgada anterior
    this.destroyParticles();

    const host = document.getElementById(this.particlesId);
    if (!host) return;

    // Asegurar dimensiones reales
    if (host.clientWidth === 0 || host.clientHeight === 0) {
      await this.nextFrame();
    }

    this.container = await tsParticles.load(this.particlesId, this.getParticlesOptions());
  }

  private destroyParticles(): void {
    try {
      if (this.container) {
        this.container.destroy();
        this.container = undefined;
      }

      // Compat con versiones donde domItem(index:number)
      const existing = tsParticles.dom().find((c) => c.id === this.particlesId);
      existing?.destroy();
    } catch {
      // silenciar: preferimos no romper el Hero
    }
  }

  private onVisibilityChange(): void {
    // Si la tab se oculta, pausamos para evitar estados raros
    if (document.hidden) {
      this.container?.pause();
      return;
    }

    // Al volver, algunos navegadores dejan el canvas en estado zombie.
    // Reanudamos y refrescamos; si no hay container, lo recreamos.
    if (this.container) {
      try {
        this.container.play();
        // refresh re-calcula tamaños / re-inicializa internamente
        void this.container.refresh();
      } catch {
        // Si quedó roto, lo recreamos
        void this.initParticles();
      }
    } else {
      void this.initParticles();
    }
  }

  private onFocusBack(): void {
    // Por si vuelve el foco sin disparar visibilitychange (pasa a veces)
    if (!document.hidden) {
      this.onVisibilityChange();
    }
  }

  private nextFrame(): Promise<void> {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }
}
