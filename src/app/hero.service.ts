import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HERO } from './mock-heroes'
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of (HERO);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero with id:${id}`);
    return of (HERO.find(hero => hero.id === id));
  }
}
