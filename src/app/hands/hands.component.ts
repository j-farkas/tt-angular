import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-hands',
  templateUrl: './hands.component.html',
  styleUrls: ['./hands.component.css']
})
export class HandsComponent implements OnInit {
game: Game;
  constructor() { }

  ngOnInit() {
    this.game = new Game();
    this.game.dealToPlayers();
    console.log(this.game);
  }

}
