import { Component, OnInit } from '@angular/core';
import { GameinfoService } from '../gameinfo.service';
import { GAME } from './../current-game';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  providers: [GameinfoService]
})
export class ScoreComponent implements OnInit {
score: {red: number, blue: number};
  constructor(private gameinfoService: GameinfoService) { }

  ngOnInit() {
    this.score = {red: 5, blue: 5};
    this.score.red = GAME.deck.filter((x) => x.owner === "red").length;
    this.score.blue = GAME.deck.filter((x) => x.owner === "blue").length;
  }

}
