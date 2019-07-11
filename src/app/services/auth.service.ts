import { Injectable } from '@angular/core';
import { User } from '../components/user/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

   constructor() { }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      alert('Please enter your userName and password');
      return;
    }

    this.currentUser = {
      id: 1,
      userName,
    };
  }

  logout(): void {
    this.currentUser = null;
  }
}
