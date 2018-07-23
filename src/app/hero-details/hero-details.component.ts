import { HeroService } from './../services/hero.service';
import { Hero } from './../model/hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ang-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  selectedHero: Hero;

  constructor(private _activatedRoute: ActivatedRoute
              ,private _heroService: HeroService
              ,private _location: Location) { }

  ngOnInit() {
    let id = +this._activatedRoute.snapshot.paramMap.get('id');
    this._heroService.getHero(id).subscribe( hero => this.selectedHero = hero);
  }

  goBack() {
    this._location.back();
  }

  save(): void {
    this._heroService.updateHero(this.selectedHero)
      .subscribe(() => this.goBack());
  }

}
