import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LoginFormGroup } from '../models/login.model';
import { UserModel, UserPlusModel } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usertoken: any;
  user: UserPlusModel = {
    name: '',
    coins: 100,
    deck:  []
  };

  form: FormGroup<LoginFormGroup> = this.formBuilder.group({
    login: new FormControl<string | null>(null, Validators.required),
  });

  constructor(private apiService: ApiService,  private formBuilder: FormBuilder) {}
  ngOnInit() {}

  getToken(name: string) {
    this.apiService.name(name).subscribe((data) => {
      this.usertoken = data;
    });
  }

  getUser(usertoken: any) {
    this.apiService.user(usertoken).subscribe((data) => {
      this.user = data ?? this.user;
    });
  }

  setDeck() {
    this.getToken(this.form.controls.login.value);
    this.getUser(this.usertoken);

    this.user.name = this.form.controls.login.value;


    localStorage.setItem('token', JSON.stringify(this.usertoken));
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
