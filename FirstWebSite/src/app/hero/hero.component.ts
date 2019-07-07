import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() heroName = "";

  constructor() {
  }

  ngOnInit() {
    console.log("Child ngOnInit");
  }

  ngOnChanges() {
    console.log("Child ngOnChanges");
  }

}
