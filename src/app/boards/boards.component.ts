import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';
import { GAME } from './../current-game';
import { GameinfoService } from '../gameinfo.service';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
  providers: [GameinfoService]
})
export class BoardsComponent implements OnInit {
  board: Card[];
  game: Game;
  constructor(private gameinfoService: GameinfoService) { }

  ngOnInit() {
    this.gameinfoService.CARDS.subscribe(z =>     setTimeout(function(){ GAME.dealToPlayers()
        console.log(GAME) }, 500))

    this.board = GAME.board
    this.game = GAME;


  }

  drop_handler(location: number){
    GAME.selected = location;
  }
}
