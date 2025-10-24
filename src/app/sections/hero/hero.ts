import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-wrap">
      <img class="hero-img" src="/images/pnoel-hero.png" alt="Papá Noel Argentina" />
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .hero-wrap {
        position: relative;
        min-height: calc(76vh - var(--nav-height, 80px));
        padding-top: 4rem;
        overflow: hidden;
        background: transparent;
        isolation: isolate; /* aísla el pseudo-elemento */
      }

      /* Glow detrás de Papá Noel */
      .hero-wrap::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 60vw;
        height: 100%;
        transform: translateX(10%);
        background: radial-gradient(
          circle at 70% 60%,
          rgba(255, 215, 180, 0.4) 0%,
          rgba(255, 180, 120, 0.15) 30%,
          rgba(0, 0, 0, 0) 70%
        );
        z-index: 0;
        opacity: 0;
        animation: glowFadeIn 1.6s ease-out forwards;
      }

      @keyframes glowFadeIn {
        from {
          opacity: 0;
          transform: translateX(12%) scale(1.05);
        }
        to {
          opacity: 1;
          transform: translateX(10%) scale(1);
        }
      }

      .hero-img {
        position: absolute;
        right: 0;
        bottom: 0;
        height: clamp(420px, 85vh, 900px);
        width: auto;
        object-fit: contain;
        z-index: 1;
        transform: translateX(2%) scale(0.96);
        opacity: 0;
        animation: fadeUp 1.8s ease-out forwards;
        animation-delay: 0.2s;
      }

      @keyframes fadeUp {
        0% {
          opacity: 0;
          transform: translateX(2%) translateY(40px) scale(0.96);
          filter: blur(6px);
        }
        60% {
          opacity: 1;
          filter: blur(0);
        }
        100% {
          opacity: 1;
          transform: translateX(2%) translateY(0) scale(1);
        }
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hero-wrap {
          min-height: auto;
          padding: 5rem 0 0;
        }
        .hero-wrap::before {
          width: 100%;
          height: 70%;
          left: 0;
          right: 0;
          transform: none;
          background: radial-gradient(
            circle at 50% 80%,
            rgba(255, 215, 180, 0.35) 0%,
            rgba(255, 180, 120, 0.15) 40%,
            rgba(0, 0, 0, 0) 80%
          );
        }
        .hero-img {
          position: static;
          display: block;
          margin: 1rem auto 0;
          width: min(90%, 520px);
          height: auto;
          transform: none;
          animation: fadeUpMobile 1.5s ease-out forwards;
        }
        @keyframes fadeUpMobile {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    `,
  ],
})
export class Hero {}
