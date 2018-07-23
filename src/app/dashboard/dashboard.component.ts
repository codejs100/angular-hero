import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'ang-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
    this._heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(0).splice(1,5),
      eer => console.log(eer)
    );
  }

}
