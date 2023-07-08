import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPlusModel } from '../models/user.model';
import { PokemonService } from '../pokemon.service';
import { LocalStorageService } from '../storage.service';

@Injectable()
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  userName: string = '';

  user: UserPlusModel = {
    name: '',
    coins: JSON.parse(localStorage.getItem('user')).coins,
    deck: []
  };

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('user')).name;


    this.localStorageService.getStorageChanges().subscribe((currentValue: string) => {
      this.user = JSON.parse(localStorage.getItem('user'))
      
    });
  
  }

    deleteLocalStorage() {
      localStorage.removeItem('user');
    }
  }
