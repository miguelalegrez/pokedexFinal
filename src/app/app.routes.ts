import { LocationStrategy } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginPAgeComponent } from './modules/authentication/pages/login-page/login-page.component';
import { PokemonCardComponent } from './modules/pokemon/components/pokemon-card/pokemon-card.component';
import { PokemonPageComponent } from './modules/pokemon/pages/pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './modules/pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './modules/pokemon/pages/pokemon-detail/pokemon-detail.component';
import { BerriesComponent } from './modules/berries/berries.component';
import { ItemsComponent } from './modules/items/items.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-details', component: PokemonDetailComponent },
  { path: 'berries', component: BerriesComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'login', component: LoginPAgeComponent },
  { path: 'pokemon', component: PokemonPageComponent },
];
