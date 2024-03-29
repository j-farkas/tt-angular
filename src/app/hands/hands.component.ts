import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';
import { GAME } from '../current-game';
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
    let that = this;
    setTimeout(function(){ that.hand = GAME.player1.hand;
    console.log(GAME) }, 1000);
    this.hand = that.hand;

  }

  drag_handler(id: number){
    GAME.dragged = this.hand.filter((x) => x.id === id)[0];
    console.log(this.hand);
  }

  drag_end(){
      if(GAME.board[GAME.selected-1].id == 0 && GAME.turn % 2 === 0){
      GAME.board[GAME.selected-1] = GAME.dragged;
      console.log(GAME.dragged);
      GAME.turn++;
      this.hand = this.hand.filter((x) => x.id != GAME.dragged.id);
      GAME.flipIt(GAME.selected);
    }
  }
}
