import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { PokemonModel } from './models/pokemon.model';
import { UserModel } from './models/user.model';
import { UserPlusModel } from './models/user.model';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  @Input() boosters = [];
  @Input() data: PokemonModel;
  @Input() pokemon: PokemonModel;

  solde: number = Number(JSON.parse(localStorage.getItem('user')).coins);
  min: number = 1;
  max: number = 200;
  random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
  pokemonsIds: number[] = [];
  i: number = 0;

  

  constructor(
    public pokemons: PokemonComponent,
    public apiService: ApiService
  ) { }

  getPokemonBooster(limit: number) {
    if (this.solde >= 10) {
      this.boosters = [];
      this.i = 0;
      this.solde = this.solde - 10;
      while (this.i < limit) {
        this.random =
          Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.apiService.get(this.random).subscribe((data) => {
          this.pokemon = {
            name: data['name'],
            poke_id: data['poke_id'],
            stats: data['stats'],
            image: data['image'],
            type: data['type'],
          };
          this.boosters.push(this.pokemon);
        });
        this.i++;
      }

      this.setSoldeInStorage();

      return this.boosters;
    }
  }

  sellPokemon(index: number) {
    this.boosters.splice(index, 1).slice(0);
    this.solde = this.solde + 1;

    this.setSoldeInStorage();
  }

  addDeck(index: number) {
    this.solde = this.solde - 1;
    this.pokemonsIds.push(this.boosters[index].poke_id);
    this.sellPokemon(index);

    this.setSoldeInStorage();

  }

  displayDeck() {
    return this.pokemonsIds;
  }

  getSolde() {
    return this.solde;
  }

  setSoldeInStorage(){
    const user = JSON.parse(localStorage.getItem('user'));
    user.coins = this.solde;
      localStorage.setItem('user', JSON.stringify(user));
  }
}
