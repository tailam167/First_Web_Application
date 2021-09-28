import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser!: IUser;

  // tslint:disable-next-line: typedef
  loginUser(userNameInput: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Lam',
      lastName: 'Tai',
      userName: userNameInput,
    };
  }

  // tslint:disable-next-line: typedef
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  // tslint:disable-next-line: typedef
  isAuthenticated() {
    return !!this.currentUser;
  }
}
