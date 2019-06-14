import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAME } from '../current-game';

@Component({
  selector: 'app-hands2',
  templateUrl: './hands2.component.html',
  styleUrls: ['./hands2.component.css']
})
export class Hands2Component implements OnInit {
hand: {}[];
  constructor() { }

  ngOnInit() {
    this.hand = GAME.player2.hand;
  }

}
