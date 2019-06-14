import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';
import { GAME } from '../current-game';
import {CARDS} from '.././card-list';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  board: Card[];
  game: Game;
  constructor() { }

  ngOnInit() {
    this.board = [new Card(0,0,0,0,0),new Card(0,0,0,0,0),new Card(0,0,0,0,0)
                  ,new Card(0,0,0,0,0),new Card(0,0,0,0,0),new Card(0,0,0,0,0)
                ,new Card(0,0,0,0,0),new Card(0,0,0,0,0),new Card(0,0,0,0,0)];
    this.game = GAME;
    GAME.dealToPlayers();
  }

drop_handler(location: number){
  GAME.selected = location;
  //this.board[location-1] = GAME.dragged;
}
}
