import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userfirstName = '';
  userlastName = '';
  values = '';
  students = [];

  ngOnInit() {
    console.log("Parent ngOnInit");
  }

  ngOnChanges() {
    console.log("Parent ngOnChanges");
  }
  onKeyUp(text: string) {
    this.userfirstName = text;
    this.userlastName = text;
  }

  functionName(event: any) {
    debugger;

    //this.values += (<HTMLInputElement>event.target).value + ' | ';
    this.values = event.target.value;

  }

  onKeyString(value: string) {
    this.values += value + ' | ';

  }

  AddStudent(studentName: string) {
    if (!this.students.includes(studentName)) {
      this.students.push(studentName);
    }
  }

}
