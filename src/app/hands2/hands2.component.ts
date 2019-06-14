import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAME } from '../current-game';
import {CARDS} from '.././card-list';

@Component({
  selector: 'app-hands2',
  templateUrl: './hands2.component.html',
  styleUrls: ['./hands2.component.css']
})
export class Hands2Component implements OnInit {
hand: {image}[];
  constructor() { }

  ngOnInit() {
    this.hand = GAME.player2.hand;
  }

  drag_handler(id: string){
    GAME.dragged = id;
    console.log(GAME);
  }

  drag_end(){
    if(GAME.board[GAME.selected-1] === 0 && GAME.turn % 2 === 1){
      GAME.board[GAME.selected-1] = GAME.dragged;
      GAME.turn++;
      this.hand = this.hand.filter((x) => x.image != GAME.dragged);
    }
  }

}
