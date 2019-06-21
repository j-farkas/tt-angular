import { Component, OnInit } from '@angular/core';
import { GameinfoService } from '../gameinfo.service';

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
    //this.score.red = this.gameinfoService.GAME.deck.filter((x) => x.owner === "red").length;
    //this.score.blue = this.gameinfoService.GAME.deck.filter((x) => x.owner === "blue").length;
  }

}
