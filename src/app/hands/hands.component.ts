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
    let that = this;
    setTimeout(function(){ that.hand = that.gameinfoService.GAME.player1.hand;
    console.log(that.gameinfoService.GAME) }, 1000);
    this.hand = that.hand;

  }

  drag_handler(id: number){
    this.gameinfoService.GAME.dragged = this.hand.filter((x) => x.id === id)[0];
    console.log(this.hand);
  }

  drag_end(){

      console.log(document.querySelector(".grid-item:hover").getAttribute(`class`)[(document.querySelector(".grid-item:hover").getAttribute(`class`)).length-1])
      this.gameinfoService.GAME.selected = parseInt(document.querySelector(".grid-item:hover").getAttribute(`class`)[document.querySelector(".grid-item:hover").getAttribute(`class`).length-1])
      console.log(this.gameinfoService.GAME);
      if(this.gameinfoService.GAME.board[this.gameinfoService.GAME.selected-1].id == 0 && this.gameinfoService.GAME.turn % 2 === 0){
      this.gameinfoService.GAME.board[this.gameinfoService.GAME.selected-1] = this.gameinfoService.GAME.dragged;
      console.log(this.gameinfoService.GAME.dragged);
      document.getElementById("i"+(this.gameinfoService.GAME.selected)).setAttribute("src",this.gameinfoService.GAME.dragged.image);
      this.gameinfoService.GAME.turn++;
      this.hand = this.hand.filter((x) => x.id != this.gameinfoService.GAME.dragged.id);
      this.gameinfoService.GAME.flipIt(this.gameinfoService.GAME.selected);
    }
  }
}
