import { HEROES } from './../mock-data/heros.mock-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from '../model/hero';
import { MessagesService } from './messages.service';

@Injectable()
export class HeroService {

  constructor(private _messageService: MessagesService) { }

  getHeros(): Observable<Hero[]> {
    this._messageService.addMessage('Fetch data from the service');
    return of(HEROES);
  }

}
