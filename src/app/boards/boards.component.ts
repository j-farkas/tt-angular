import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAME } from '../current-game';


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

}
