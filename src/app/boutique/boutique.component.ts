import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { PokemonService } from '../pokemon.service';
import { PokemonComponent } from '../pokemon/pokemon/pokemon.component';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css'],
})
export class BoutiqueComponent {
  constructor(public pokemons: PokemonService) {}

  boosters = [];

  getPokemonBooster() {
    this.boosters = this.pokemons.getPokemonBooster(10);
  }

  sellPokemon(index: number) {
    this.pokemons.sellPokemon(index);
  }

  addDeck(index: number) {
    this.pokemons.addDeck(index);
  }
}
