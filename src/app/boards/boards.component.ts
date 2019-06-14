import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAME } from '../current-game';
import {CARDS} from '.././card-list';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    GAME.dealToPlayers();
  }

drop_handler(location: number){
  GAME.selected = location;
  console.log("You did it");
}
}
