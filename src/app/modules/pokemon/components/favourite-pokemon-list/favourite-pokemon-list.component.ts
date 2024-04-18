import { Component } from '@angular/core';
import { Pokemon } from '../../../../core/models/pokemon.model';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favourite-pokemon-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './favourite-pokemon-list.component.html',
  styleUrl: './favourite-pokemon-list.component.css',
})
export class FavouritePokemonListComponent {
  favoritePokemon: Pokemon[];

  constructor(private pokemonService: PokemonService) {
    this.favoritePokemon = pokemonService.getFavoritePokemon();
  }
}
