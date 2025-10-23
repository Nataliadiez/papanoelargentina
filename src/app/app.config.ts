import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling, // 👈 opciones de scroll/anclas
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // 👈 si vas a usar HttpClient (forms, APIs)
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),

    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // vuelve al tope al navegar o restaura en back/forward
        anchorScrolling: 'enabled', // habilita navegación a #anclas
      })
    ),

    provideHttpClient(), // dejalo si usás formularios, mails, etc.
  ],
};
