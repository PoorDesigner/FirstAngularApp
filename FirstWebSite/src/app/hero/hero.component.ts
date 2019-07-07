import { Component, OnInit } from '@angular/core';
import { Hero, HeroType } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  selectedHero: Hero;
  heroes: Array<Hero> = [
    {
      id: 101,
      name: "Prabhas"
    },
    {
      id: 202,
      name: "Tom"
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
