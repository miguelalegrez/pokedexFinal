import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../../core/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
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
