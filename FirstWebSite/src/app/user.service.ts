import { Injectable } from '@angular/core';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {

  }

  Login(userName:string, password: string): Boolean {
    debugger;
    return true;
  }
}
