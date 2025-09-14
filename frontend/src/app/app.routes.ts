import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard').then(
        (m) => m.Dashboard,
      ),
  },
  {
    path: 'bookings',
    loadComponent: () =>
      import('./features/bookings/bookings').then(
        (m) => m.Bookings,
      ),
  },
  {
    path: 'messages',
    loadComponent: () =>
      import('./features/messages/messages').then(
        (m) => m.Messages,
      ),
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./features/analytics/analytics').then(
        (m) => m.Analytics,
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth').then((m) => m.Auth),
  },

  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'dashboard' },
];
