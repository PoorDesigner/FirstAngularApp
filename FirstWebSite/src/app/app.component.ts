import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  
  ngOnInit() {
    console.log("Parent ngOnInit");
  }

  ngOnChanges() {
    console.log("Parent ngOnChanges");
  }

}
