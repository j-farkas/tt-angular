import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAME } from '../current-game';
import { CARDS } from '.././card-list';



@Component({
  selector: 'app-hands',
  templateUrl: './hands.component.html',
  styleUrls: ['./hands.component.css']
})
export class HandsComponent implements OnInit {
  hand: {image}[];
  constructor() { }

  ngOnInit() {
    this.hand = GAME.player1.hand;

  }

  drag_handler(id: string){
    GAME.dragged = id;
    console.log(GAME);
  }

  drag_end(){
    if(GAME.board[GAME.selected-1] === 0 && GAME.turn % 2 === 0){
      GAME.board[GAME.selected-1] = GAME.dragged;
      GAME.turn++;
      //console.log(parseInt(GAME.dragged.split("/")[2].split("_")[0]));
      this.hand = this.hand.filter((x) => x.image != GAME.dragged);
        }

  }

}
