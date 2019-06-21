import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAME } from './current-game';
import { Card } from './card';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameinfoService {
  //GAME: Game;
  CARDS: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    //console.log(database.list('cards'));
  this.CARDS = database.list('cards');
  //this.GAME = new Game();
  this.CARDS.subscribe(z => GAME.deck = Object.values(z).map(function(x){
    return new Card(parseInt(x.up), parseInt(x.down),parseInt(x.left),parseInt(x.right), x.id);
  }))
}
// updateBoard(position, card){
//   console.log(this.board);
//   // this.board.$ref(`board/` + position).set({
//   //   up: card.up,
//   //   down: card.down,
//   //   left: card.left,
//   //   right: card.right,
//   //   owner: card.owner,
//   //   image: card.image,
//   //   id: card.id
//   // })
//   // this.board[position-1] = {
//   //   up: card.up,
//   //   down: card.down,
//   //   left: card.left,
//   //   right: card.right,
//   //   owner: card.owner,
//   //   image: card.image,
//   //   id: card.id
//   // }
// }
// refreshBoard(){
//   this.board.subscribe(z => this.GAME.board = Object.values(z).map(function(x){
//     let card = new Card(x.up, x.down,x.left,x.right, x.id);
//     card.owner = x.owner;
//     card.image = x.image;
//     return card;
//   }))
// }

}
