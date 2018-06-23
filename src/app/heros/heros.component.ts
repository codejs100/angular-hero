import { Component, OnInit } from '@angular/core';
import { Hero } from './../model/hero';
import { HEROES } from './../mock-data/heros.mock-data';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'ang-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this._heroService.getHeros().subscribe(
      response => this.heroes = response
    );
  }

  onSelected(value) {
    this.selectedHero = value;
  }

}
