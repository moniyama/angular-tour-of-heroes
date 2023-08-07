import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: HeroInterface[] = [];

  getHeroes(): void {
    this.serviceHero.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void { //on init - after constructing componente (lifecycle hook)
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim()
    if (!name) { return; }
    this.serviceHero.addHero({ name } as HeroInterface).subscribe(hero => {
      this.heroes.push(hero);
    })
  }
  delete(hero: HeroInterface): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.serviceHero.deleteHero(hero.id).subscribe()
  }

  constructor(private serviceHero: HeroService, private serviceMessage: MessageService) { }
}