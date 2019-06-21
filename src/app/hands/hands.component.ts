import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';
//import { GAME } from '../current-game';
import { GameinfoService } from '../gameinfo.service';

@Component({
  selector: 'app-hands',
  templateUrl: './hands.component.html',
  styleUrls: ['./hands.component.css'],
  providers: [GameinfoService]
})
export class HandsComponent implements OnInit {
  hand: Card[];
  constructor(private gameinfoService: GameinfoService) { }

  ngOnInit() {
    this.hand = this.gameinfoService.GAME.player1.hand;
  }

  drag_handler(id: number){
    this.gameinfoService.GAME.dragged = this.hand.filter((x) => x.id === id)[0];;
  }

  drag_end(){
    if(this.gameinfoService.GAME.board[this.gameinfoService.GAME.selected-1].id === 0 && this.gameinfoService.GAME.turn % 2 === 0){
      this.gameinfoService.GAME.board[this.gameinfoService.GAME.selected-1] = this.gameinfoService.GAME.dragged;
      this.gameinfoService.GAME.turn++;
      this.hand = this.hand.filter((x) => x.id != this.gameinfoService.GAME.dragged.id);
      this.gameinfoService.GAME.flipIt(this.gameinfoService.GAME.selected);
    }
  }
}
