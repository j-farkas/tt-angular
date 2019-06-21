import { Injectable } from '@angular/core';
import { Game } from './game';
import { Card } from './card';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameinfoService {
  GAME: Game;
  hand1: {};
  hand2: {};
  CARDS: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    //console.log(database.list('cards'));
  this.CARDS = database.list('cards');
  this.GAME = new Game();
  this.CARDS.subscribe(z => this.GAME.deck = Object.values(z).map(function(x){
    return new Card(x.up, x.down,x.left,x.right, x.id);
  })
)
let that = this;
this.CARDS.subscribe(z =>     setTimeout(function(){ that.GAME.dealToPlayers()
    console.log(that.GAME) }, 500)

  )
}

}
