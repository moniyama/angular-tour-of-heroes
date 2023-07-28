import { Component, Input } from '@angular/core';
import { HeroInterface } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: HeroInterface; //precisa do decorator pq é um valor que é recebido.
  //há um bind externo com heroes component
  // como se fosse as props
  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.serviceHero.getHero(id)
      .subscribe(selectedHero => this.hero = selectedHero)
  }
  goBack(): void {
    this.location.back();
  }
  
  constructor(
    private route: ActivatedRoute,
    private serviceHero: HeroService,
    private location: Location
  ) { }
}
