import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';
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
    this.board = [new Card(0,0,0,0,0),new Card(0,0,0,0,0),new Card(0,0,0,0,0)
                  ,new Card(0,0,0,0,0),new Card(0,0,0,0,0),new Card(0,0,0,0,0)
                ,new Card(0,0,0,0,0),new Card(0,0,0,0,0),new Card(0,0,0,0,0)];
    this.game = this.gameinfoService.GAME;
    let service = this.gameinfoService;
    setTimeout(function(){ service.GAME.dealToPlayers() }, 3000);

  }

  drop_handler(location: number){
    this.gameinfoService.GAME.selected = location;
  }
}
