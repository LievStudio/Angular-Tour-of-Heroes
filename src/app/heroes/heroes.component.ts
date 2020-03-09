import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HERO } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero ;
  heroes : Hero[];

  selectedHero: Hero;

  constructor(private heroeService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroes = this.heroeService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
    }


}
