import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
game: Game;
  constructor() { }

  ngOnInit() {
    this.game = new Game();
    this.game.dealToPlayers();
    console.log(this.game);
  }

}
