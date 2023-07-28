import { Injectable } from '@angular/core';
import { HEROESMOCK } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { HeroInterface } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<HeroInterface[]> {
    const heroes = of(HEROESMOCK);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: Number): Observable<HeroInterface> {
    const hero = HEROESMOCK.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) { }
}
