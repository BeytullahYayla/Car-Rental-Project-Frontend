import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

 
  localStorage: Storage;
  currentUser: string = 'currentUser';

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string) {
    return this.localStorage.getItem(key);
  }

  set(key: string, value: string) {
    this.localStorage.setItem(key, value);
  }

  remove(key: string) {
    this.localStorage.removeItem(key);
  }

  clean() {
    this.localStorage.clear();
  }

  setCurrentUser(currentUserValue: UserModel) {
    localStorage.setItem(this.currentUser, JSON.stringify(currentUserValue));
  }



  getCurrentUser(): UserModel {
    return JSON.parse(localStorage.getItem(this.currentUser));
  }

  removeCurrentUser() {
    localStorage.removeItem(this.currentUser);
  }
}
