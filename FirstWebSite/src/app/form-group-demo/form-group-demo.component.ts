import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-group-demo',
  templateUrl: './form-group-demo.component.html',
  styleUrls: ['./form-group-demo.component.css']
})
export class FormGroupDemoComponent implements OnInit {


  constructor(private fb: FormBuilder) {
  }

  LoginFormGroup = this.fb.group({
    userName: '',
    password: ''
  })

  ngOnInit() {
  }

  formSubmitted() {
    debugger;
    alert("submitted");
  }
}
