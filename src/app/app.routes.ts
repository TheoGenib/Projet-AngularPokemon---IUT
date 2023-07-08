import { Routes } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { DeckComponent } from './deck/deck.component';

import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'deck', component: DeckComponent },
  { path: 'boutique', component: BoutiqueComponent },
];
