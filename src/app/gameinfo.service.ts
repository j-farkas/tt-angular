import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAME } from './current-game';
import { Card } from './card';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameinfoService {
  CARDS: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.CARDS = database.list('cards');
  this.CARDS.subscribe(z => GAME.deck = Object.values(z).map(function(x){
    return new Card(parseInt(x.up), parseInt(x.down),parseInt(x.left),parseInt(x.right), x.id);
  }))
}
}
