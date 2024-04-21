import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../../core/models/pokemon.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    types: [],
    size: 0,
    abilities: [],
    imageUrl: '',
  };

  constructor(private pokemonService: PokemonService) {}

  //Recibe el tipo de pokemon a través del array (string)
  getBackgroundClass(type: string): string {
    switch (type) {
      case 'fire':
        return 'fire-background';
      case 'water':
        return 'water-background';
      case 'grass':
        return 'grass-background';
      case 'electric':
        return 'electric-background';
      default:
        return 'default-background';
    }
  }

  addFavoritePokemon(pokemon: Pokemon) {
    this.pokemonService.addFavoritePokemon(pokemon);
  }

  deleteFavoritePokemon(pokemon: Pokemon) {
    this.pokemonService.deleteFavoritePokemon(pokemon);
  }
}
