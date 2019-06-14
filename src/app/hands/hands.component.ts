import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-hands',
  templateUrl: './hands.component.html',
  styleUrls: ['./hands.component.css']
})
export class HandsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let game = new Game();
    game.dealToPlayers();
    console.log(game);
  }

}
