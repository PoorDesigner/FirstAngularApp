import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = '';
  constructor() {
    this.today = Date.now();
  }
  
  ngOnInit() {
    console.log("Parent ngOnInit");
  }

  ngOnChanges() {
    console.log("Parent ngOnChanges");
  }

}
