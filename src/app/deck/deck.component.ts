import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from '../api.service';
import { BoutiqueComponent } from '../boutique/boutique.component';
import { SearchPokemonFormGroup } from '../models/deck.model';
import { PokemonModel } from '../models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  pokemonsIds: number[] = [];
  deck = [];
  deckFiltered = [];
  @Input() data: PokemonModel;
  @Input() pokemon: PokemonModel = {} as PokemonModel;
  
  form: FormGroup<SearchPokemonFormGroup> = this.formBuilder.group({
    searchLabel: new FormControl<string | null>(null),
    searchType: new FormControl<string | null>(null),
  });

  types: string[] = ['rock','water','ice','fire','grass','ghost']

  constructor(
    public pokemonService: PokemonService,
    public apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit() {
    // On recupère le deck dans le local storage

    const user = JSON.parse(localStorage.getItem('user')) ?? [];
    
    this.deck = user.deck;
    this.pokemonsIds = this.pokemonService.displayDeck();

    // On ajoute les nouvelles cartes
    for (const card in this.pokemonsIds) {
      this.apiService.get(this.pokemonsIds[card]).subscribe((data) => {
        this.pokemon = {
          name: data['name'],
          poke_id: data['poke_id'],
          stats: data['stats'],
          image: data['image'],
          type: data['type'],
        };

        this.deck.push(this.pokemon);
      });
    }

    user.deck = this.deck
    // On remet à jour le local storage
    localStorage.setItem('user', JSON.stringify(user));

    this.deckFiltered = this.deck;
    this.searchCard();
  }

  searchCard() {
    this.form.controls.searchLabel.valueChanges.pipe().subscribe(() => {
      this.deckFiltered = this.deck.filter((card) =>
        card.name.includes(this.form.controls.searchLabel.value)
      );
    });

    this.form.controls.searchType.valueChanges.pipe().subscribe(() => {
      this.deckFiltered = this.deck.filter((card) =>
        card.type.includes(this.form.controls.searchType.value)
      );
    });
  }
}
