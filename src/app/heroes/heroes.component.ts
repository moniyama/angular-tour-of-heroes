import { Component } from '@angular/core';
import { HeroInterface } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: HeroInterface[] = [];
  selectedHero?: HeroInterface
  onSelect(hero: HeroInterface): void {
    console.log(hero)
    this.selectedHero = hero
  }
  async getHeroes(): Promise<HeroInterface[]>  {
    const data = await this.serviceHero.getHeroes();
    return this.heroes = data ?? []
  }
  
  ngOnInit(): void { //on init - after constructing componente (lifecycle hook)
    this.getHeroes();
  }

  constructor(private serviceHero: HeroService){}
}