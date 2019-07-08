import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = 'https://localhost:44329/api/Notifications/Login';

  constructor(private http: HttpClient) {

  }

  Login(userName: string, password: string) {
    const url = `${this.userUrl}/${userName}/${password}`; // DELETE api/heroes/42
    console.log(url);
    return this.http.get(url);
  }
}
