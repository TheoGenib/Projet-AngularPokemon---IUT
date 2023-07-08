import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeckComponent } from './deck/deck.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
} from '@angular/router';
import { ROUTES } from './app.routes';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    
  ],
  declarations: [
    AppComponent,
    PokemonComponent,
    HomeComponent,
    NavbarComponent,
    DeckComponent,
    BoutiqueComponent,
  ],
  providers: [ApiService, HttpClient, PokemonComponent, Storage],
  bootstrap: [AppComponent],
})
export class AppModule {}
