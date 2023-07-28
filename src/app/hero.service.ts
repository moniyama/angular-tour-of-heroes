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
  constructor(private messageService: MessageService) { }
}
