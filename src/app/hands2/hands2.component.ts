import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';
import { GAME } from './../current-game';
import { GameinfoService } from '../gameinfo.service';

@Component({
  selector: 'app-hands2',
  templateUrl: './hands2.component.html',
  styleUrls: ['./hands2.component.css'],
  providers: [GameinfoService]
})
export class Hands2Component implements OnInit {
  hand: Card[];
  constructor(private gameinfoService: GameinfoService) { }

  ngOnInit() {
    let that = this;
    setTimeout(function(){ that.hand = that.gameinfoService.GAME.player2.hand;
    console.log(that.hand); }, 1000);
    this.hand = that.hand;

  }

  drag_handler(id: number){
    GAME.dragged = this.hand.filter((x) => x.id === id)[0];;
  }

  drag_end(){
    console.log(GAME);
    if(GAME.board[GAME.selected-1].id === 0 && GAME.turn % 2 === 1){
      GAME.board[GAME.selected-1] = GAME.dragged;
      GAME.turn++;
      this.hand = this.hand.filter((x) => x.id != GAME.dragged.id);
      GAME.flipIt(GAME.selected);
    }
  }
}
