import { Component } from '@angular/core';
import { Pokemon } from '../../../../core/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-favourite-pokemon-list',
  templateUrl: './favourite-pokemon-list.component.html',
  styleUrl: './favourite-pokemon-list.component.css',
})
export class FavouritePokemonListComponent {
  favoritePokemon: Pokemon[];

  constructor(private pokemonService: PokemonService) {
    this.favoritePokemon = pokemonService.getFavoritePokemon();
  }
}
