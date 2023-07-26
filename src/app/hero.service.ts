import { Injectable } from '@angular/core';
import { HEROESMOCK } from './mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes() {
    return HEROESMOCK
  }
  constructor() { }
}
