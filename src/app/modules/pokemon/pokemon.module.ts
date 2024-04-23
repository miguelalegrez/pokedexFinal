import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { FavouritePokemonListComponent } from './components/favourite-pokemon-list/favourite-pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonListComponent,
    PokemonCardComponent,
    FavouritePokemonListComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    RouterOutlet,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  providers: [PokemonService],
})
export class PokemonModule {}
