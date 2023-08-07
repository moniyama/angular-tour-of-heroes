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
    const url = `${this.heroesUrl}/${id}`;
    const hero = this.fetch.get<HeroInterface>(url)
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }
  updateHero(hero: HeroInterface): Observable<any> {
    const url = `${this.heroesUrl}/${hero.id}`;
    this.messageService.add(`HeroService: update hero id=${hero.id}`);
    return this.fetch.put(url, hero, this.httpOptions)
  }
  addHero(hero: HeroInterface): Observable<HeroInterface>{
    return this.fetch.post<HeroInterface>(this.heroesUrl, hero, this.httpOptions)
  }
  deleteHero(id: number): Observable<HeroInterface>{
    const url = `${this.heroesUrl}/${id}`;
    return this.fetch.delete<HeroInterface>(url, this.httpOptions)
  }
  constructor(
    private fetch: HttpClient,
    private messageService: MessageService,
  ) { }
}
