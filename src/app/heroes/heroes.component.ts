import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HERO } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HERO;


  constructor() { }

  ngOnInit(): void {
  }

}
