import { Injectable } from '@angular/core';
import { HEROESMOCK } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { HeroInterface } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<HeroInterface[]> {
    const heroes = of(HEROESMOCK);
    return heroes;
  }
  constructor() { }
}
