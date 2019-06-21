import { Injectable } from '@angular/core';
import { Game } from './game';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameinfoService {
  GAME: Game;
  CARDS: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
  this.CARDS = database.list('cards');
  this.GAME = new Game();
  this.GAME.deck = Object.values(this.CARDS).slice();
}

}
