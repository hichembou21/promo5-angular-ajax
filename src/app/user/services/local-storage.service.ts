import { Injectable } from '@angular/core';
import { User } from 'src/app/user/entities/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // user:User
  constructor() {
    console.log('its mes local storage');
   }

  setItem(key: string, value) {
    let json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }

  getAll(): User[] {
    let users= [];
    for(let i = 0; i < localStorage.length; i++ ) {
      let parsedJson:User = JSON.parse(localStorage.getItem(localStorage.key(i)));
      users.push(parsedJson);
    }
    return users;
  }
}
