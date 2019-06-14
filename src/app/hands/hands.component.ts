import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAME } from '../current-game';
import {CARDS} from '.././card-list';



@Component({
  selector: 'app-hands',
  templateUrl: './hands.component.html',
  styleUrls: ['./hands.component.css']
})
export class HandsComponent implements OnInit {
  hand: {}[];
  constructor() { }

  ngOnInit() {
    this.hand = GAME.player1.hand;

  }

  drag_handler(id: number){
    GAME.dragged = id;
    console.log(GAME);
  }

  drag_end(){
    GAME.board[GAME.selected-1] = GAME.dragged;
  }

}
