import { Component, OnInit } from '@angular/core';
import { GAME } from '../current-game';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
score: {red: number, blue: number};
  constructor() { }

  ngOnInit() {
    this.score = {red: 0, blue: 0};
    this.score.red = GAME.deck.filter((x) => x.owner === "red").length;
    this.score.blue = GAME.deck.filter((x) => x.owner === "blue").length;
  }

}
