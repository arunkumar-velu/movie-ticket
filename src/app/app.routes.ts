import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from "./movielist/movielist.component";
import { TicketsComponent } from "./tickets/tickets.component";

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);