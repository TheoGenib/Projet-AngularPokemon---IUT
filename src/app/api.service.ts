import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from './models/pokemon.model';
import { UserModel } from './models/user.model';
import { UserPlusModel } from './models/user.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  get(pokemonId: number) {
    return this.http.get(
      `https://lostin70s.com/lpwebfront/api/pokemon/${pokemonId}`
    );
  }
  name(name: string) {
    return this.http.post(
      `https://lostin70s.com/lpwebfront/api/poke-user/login`,
      { name }
    );
  }

  user(user_token: string): Observable<UserPlusModel> {
    return this.http.get<UserPlusModel>(
      `https://lostin70s.com/lpwebfront/api/poke-user/${user_token}`
    );
  }
}
