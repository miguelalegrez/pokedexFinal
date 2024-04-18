import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  fetchPokemons(limit: number, offset: number): Observable<Pokemon[]> {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    return this.http.get<any>(url).pipe(
      map((data) => data.results), // Extraemos solo los resultados de la respuesta

      mergeMap((results: any[]) => {
        // Mapeamos cada resultado a un Observable que emite un Pokemon
        // Esto nos proporciona una forma eficiente de manejar múltiples solicitudes HTTP en paralelo y combinar los resultados en un solo lugar.
        const pokemonObservables: Observable<Pokemon>[] = results.map(
          (result) => {
            return this.fetchPokemonByName(result.name); // Llamada a fetchPokemonByName
          }
        );
        return forkJoin(pokemonObservables); // Combinamos los observables en uno solo
      })
    );
  }

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
}
