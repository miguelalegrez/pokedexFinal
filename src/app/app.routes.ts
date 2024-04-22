import { Routes } from '@angular/router';
import { LoginPAgeComponent } from './modules/authentication/pages/login-page/login-page.component';
import { PokemonPageComponent } from './modules/pokemon/pages/pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './modules/pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './modules/pokemon/pages/pokemon-detail/pokemon-detail.component';
import { BerriesComponent } from './modules/berries/berries.component';
import { ItemsComponent } from './modules/items/items.component';
import { UserProfileComponent } from './modules/user/user-profile/user-profile.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir al login por defecto
  { path: 'pokemon-details', component: PokemonDetailComponent },
  { path: 'berries', component: BerriesComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'login', component: LoginPAgeComponent }, // Agregar una ruta para la página de inicio de sesión
  { path: 'pokemon', component: PokemonPageComponent },
  { path: 'pokemon-page', component: PokemonPageComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [authGuard],
  },
];
