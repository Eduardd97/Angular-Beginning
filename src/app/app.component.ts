import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserType } from '../types';
import { NgIf } from '@angular/common';
import { UsersComponent } from './users/users.component';

// @ - Decorator

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'initial-project';

  name: string = 'Igor';
  age: number = 24;
  city: string = 'Kyiv';

  counter: number = 0;

  // TypeScript
  user: UserType = {
    email: 'email@gmail.com',
    password: 'password',
  };

  isUserAdmin: boolean = false;

  bigValueCounter: string = '';

  // string[]
  names: Array<string> = ['Mark', 'Igor', 'Olena', 'Oleg'];

  tooBigValueCounter() {
    if (this.counter >= 50) {
      this.bigValueCounter = 'Too Big Value';
      this.counter = 50;
    } else {
      this.bigValueCounter = '';
    }
  }

  toSmallValueCounter() {
    if (this.counter <= -50) {
      this.bigValueCounter = 'Too Smal Value';
      this.counter = -50;
    } else {
      this.bigValueCounter = '';
    }
  }

  increase() {
    this.counter = this.counter + 1;
    this.tooBigValueCounter();
  }

  increaseAddTen() {
    this.counter = this.counter + 10;
    this.tooBigValueCounter();
  }

  decrease() {
    this.counter = this.counter - 1;
    this.toSmallValueCounter();
  }

  decreaseMinusTen() {
    this.counter = this.counter - 10;
    this.toSmallValueCounter();
  }

  resetCounter() {
    if (this.counter > 0 || this.counter < 0) {
      this.counter = 0;
    }
  }

  changeUserName() {
    const randomName =
      this.names[Math.floor(Math.random() * this.names.length)];

    this.name = randomName;
  }

  setUserAdmin() {
    this.isUserAdmin = !this.isUserAdmin;
  }
}
