import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros').then((m) => m.Nosotros),
  },
  {
    path: 'shoppings',
    loadComponent: () => import('./pages/shoppings/shoppings').then((m) => m.Shoppings),
  },
  {
    path: 'empresas',
    loadComponent: () => import('./pages/empresas/empresas').then((m) => m.Empresas),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then((m) => m.Contacto),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
