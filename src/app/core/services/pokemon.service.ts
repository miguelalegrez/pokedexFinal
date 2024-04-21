import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private favoritePokemons: Pokemon[] = [];
  favoriteCounter: number = 0;

  constructor(private http: HttpClient) {}

  fetchPokemons(limit: number, offset: number): Observable<Pokemon[]> {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    return this.http.get<any>(url).pipe(
      map((data) => data.results), // Extraemos solo los resultados de la respuesta

      // Mapeamos cada resultado a un Observable que emite un Pokemon
      // Esto nos proporciona una forma eficiente de manejar múltiples solicitudes HTTP en paralelo y combinar los resultados en un solo lugar.
      mergeMap((results: any[]) => {
        const pokemonObservables: Observable<Pokemon>[] = results.map(
          (result) => {
            return this.fetchPokemonByName(result.name);
          }
        );
        return forkJoin(pokemonObservables); // Combinamos los observables en uno solo
      })
    );
  }
  //Método para obtener cada pokemon por su nombre y sus detalles
  fetchPokemonByName(name: string): Observable<Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return this.http.get<any>(url).pipe(
      map((data) => ({
        id: data.id,
        name: data.name,
        size: data.height,
        types: data.types.map((type: any) => type.type.name),
        abilities: data.abilities.map((ability: any) => ability.ability.name),
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      }))
    );
  }

  addFavoritePokemon(pokemon: Pokemon): void {
    // Buscar el Pokémon en la lista de favoritos
    const existingPokemon = this.favoritePokemons.find((element: Pokemon) => {
      return pokemon.id === element.id;
    });

    // Si el Pokémon no está en la lista, agregarlo
    if (!existingPokemon) {
      this.favoritePokemons.push(pokemon);
      this.favoriteCounter++;
    } else {
      console.log('El pokemon ya existe en favoritos');
    }
  }

  deleteFavoritePokemon(pokemon: Pokemon): void {
    const index = this.favoritePokemons.findIndex(
      (element: Pokemon) => pokemon.id === element.id
    );
    this.favoritePokemons.splice(index, 1);
  }

  // Al ser una propiedad privada debo de crear un getter para el array
  getFavoritePokemon(): Pokemon[] {
    return this.favoritePokemons;
  }
}
