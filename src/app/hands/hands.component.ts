import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAME } from '../current-game';



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

}
