import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero ;
  heroes : Hero[];

  // selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessagesService) { }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  // }

  getHeroes() : void {
    this.heroService.getHeroes()
      .subscribe(heroes=>this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
    }


}
