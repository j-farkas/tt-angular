import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';
import { GAME } from '../current-game';

@Component({
  selector: 'app-hands',
  templateUrl: './hands.component.html',
  styleUrls: ['./hands.component.css']
})
export class HandsComponent implements OnInit {
  hand: Card[];
  constructor() { }

  ngOnInit() {
    this.hand = GAME.player1.hand;
  }

  drag_handler(id: number){
    GAME.dragged = this.hand.filter((x) => x.id === id)[0];;
  }

  drag_end(){
    if(GAME.board[GAME.selected-1].id === 0 && GAME.turn % 2 === 0){
      GAME.board[GAME.selected-1] = GAME.dragged;
      GAME.turn++;
      this.hand = this.hand.filter((x) => x.id != GAME.dragged.id);
      GAME.flipIt(GAME.selected);
    }
  }
}
