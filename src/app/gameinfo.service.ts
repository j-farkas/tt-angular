import { Injectable } from '@angular/core';
import { Game } from './game';
import { Card } from './card';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameinfoService {
  GAME: Game;
  board: FirebaseListObservable<any[]>;
  CARDS: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    //console.log(database.list('cards'));
  this.CARDS = database.list('cards');
  this.board = database.list('board');
  this.GAME = new Game();
  this.CARDS.subscribe(z => this.GAME.deck = Object.values(z).map(function(x){
    return new Card(x.up, x.down,x.left,x.right, x.id);
  }))
  this.refreshBoard();
let that = this;
this.CARDS.subscribe(z =>     setTimeout(function(){ that.GAME.dealToPlayers()
    console.log(that.GAME) }, 500)

  )
}
updateBoard(position, card){
  this.board[position] = new Card(card.up, card.down, card.left,card.right,card.id);
  this.board[position].owner = card.owner;
  this.board[position].image = card.image;
}
refreshBoard(){
  this.board.subscribe(z => this.GAME.board = Object.values(z).map(function(x){
    return new Card(x.up, x.down,x.left,x.right, x.id);
  }))
}

}
