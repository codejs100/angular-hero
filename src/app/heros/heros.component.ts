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
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(0)
    );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this._heroService.deleteHero(hero).subscribe();
  }

}
