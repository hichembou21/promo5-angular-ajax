import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../entities/user";
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  // user: User;
  localStor: LocalStorageService
  constructor(private httpClient : HttpClient) {
    this.localStor = new LocalStorageService;
  }

  getUser(id) {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
    .pipe(tap(res => {
      this.localStor.setItem(`user${id}`, res);
    }));
    
      // value => {
      //   // console.log(value.json().last_name);
      //   this.user = value.json();
      //   console.log(this.user.gender);
      //   return this.user;
      // });
  }
}
