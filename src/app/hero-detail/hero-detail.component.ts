import { Component, Input } from '@angular/core';
import { HeroInterface } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: HeroInterface; //precisa do decorator pq é um valor que é recebido.
  //há um bind externo com heroes component
  // como se fosse as props
}
