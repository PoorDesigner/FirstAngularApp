import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { debug } from 'util';

@Component({
  selector: 'app-form-group-demo',
  templateUrl: './form-group-demo.component.html',
  styleUrls: ['./form-group-demo.component.css']
})
export class FormGroupDemoComponent implements OnInit {

  LoginFormGroup: FormBuilder;
  constructor(fb: FormBuilder) {
    this.LoginFormGroup = fb.group({
      userName: '',
      password: ''
    })
  }



  ngOnInit() {
  }

  formSubmitted() {
    console.log(this.LoginFormGroup.value.userName + this.LoginFormGroup.value.password);
  }
}
