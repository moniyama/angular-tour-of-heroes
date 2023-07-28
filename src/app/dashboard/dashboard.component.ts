import { Component } from '@angular/core';
import { HeroInterface } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: HeroInterface[] = []
  ngOnInit() {
    this.serviceHero.getHeroes()
      .subscribe(arr => this.heroes = arr.slice(1,5))
  }
  constructor(private serviceHero: HeroService) { }
}
