import { Injectable } from '@angular/core';
import { HEROESMOCK } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { HeroInterface } from './hero';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost:8080/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    )
  };
  getHeroes(): Observable<HeroInterface[]> {
    const heroes = this.fetch.get<HeroInterface[]>(this.heroesUrl)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: Number): Observable<HeroInterface> {
    const hero = HEROESMOCK.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(
    private fetch: HttpClient,
    private messageService: MessageService,
  ) { }
}
