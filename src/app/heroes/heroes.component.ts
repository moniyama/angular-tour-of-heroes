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
  selectedHero?: HeroInterface
  onSelect(hero: HeroInterface): void {
    console.log(hero)
    this.selectedHero = hero
    this.serviceMessage.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.serviceHero.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void { //on init - after constructing componente (lifecycle hook)
    this.getHeroes();
  }

  constructor(private serviceHero: HeroService, private serviceMessage: MessageService){}
}