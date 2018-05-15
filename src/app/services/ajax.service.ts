import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { User } from "../entities/user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  user: User;
  constructor(private http : Http) {
  }

  getUser(id) {
    this.http.get(`http://localhost:3000/users/${id}`).subscribe(
      value => {
        // console.log(value.json().last_name);
        this.user = value.json();
        console.log(this.user.gender);
        return this.user;
      });
  }
}
