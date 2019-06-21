import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';
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

  }

  drag_handler(id: number){
    this.gameinfoService.GAME.dragged = this.hand.filter((x) => x.id === id)[0];;
  }

  drag_end(){
    if(this.gameinfoService.GAME.board[this.gameinfoService.GAME.selected-1].id === 0 && this.gameinfoService.GAME.turn % 2 === 1){
      this.gameinfoService.GAME.board[this.gameinfoService.GAME.selected-1] = this.gameinfoService.GAME.dragged;
      this.gameinfoService.GAME.turn++;
      this.hand = this.hand.filter((x) => x.id != this.gameinfoService.GAME.dragged.id);
      this.gameinfoService.GAME.flipIt(this.gameinfoService.GAME.selected);
    }
  }
}
