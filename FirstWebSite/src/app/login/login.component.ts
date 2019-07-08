import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userService: UserService;
  constructor(private formBuilder: FormBuilder, userService: UserService) {
    this.loginForm = formBuilder.group({
      username: '',
      password: ''
    });
    this.userService = userService;
  }

  ngOnInit() {
  }


  onSubmit() {

    console.log("calling Login");
    var result = this.userService.Login(this.loginForm.value.username, this.loginForm.value.password);
  }
}
