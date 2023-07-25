import { Component } from '@angular/core';
import { HEROESMOCK } from '../mock-heroes';
import { HeroInterface } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROESMOCK;
  selectedHero?: HeroInterface
  onSelect(hero: HeroInterface): void {
    console.log(hero)
    this.selectedHero = hero
  }
}