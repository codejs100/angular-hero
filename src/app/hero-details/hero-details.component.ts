import { Hero } from './../model/hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
