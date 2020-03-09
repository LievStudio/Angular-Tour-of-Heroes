import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HERO } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HERO;
  }

  constructor() { }
}
