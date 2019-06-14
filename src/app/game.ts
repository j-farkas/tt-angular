export class Game{
deck: {}[];
player1: {active};
player2: {active};
turn: number;
currentID: number;
board: number[];
selected: boolean;
    constructor(){
    this.deck = [],
    this.player1 = {active: true},
    this.player2 = {active: false},
    this.turn = 0,
    this.currentID = 1,
    this.board =
     [0,1,2,
      3,4,5
      ,6,7,8],
    this.selected = false;
    //this.suddenDeathMode = false;
  }
}
