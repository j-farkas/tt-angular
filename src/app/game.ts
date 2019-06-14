import {CARDS} from './card-list';
import {Card} from './card';

export class Game{
deck: Card[];
player1: {active: boolean, hand: Card[]};
player2: {active: boolean, hand: Card[]};
turn: number;
currentID: number;
board: Card[];
selected: number;
dragged: Card;
    constructor(){
    this.deck = CARDS.slice(),
    this.player1 = {active: true , hand: []},
    this.player2 = {active: false, hand: []},
    this.turn = 0,
    this.currentID = 1,
    this.board =
    [new Card(0,0,0,0,0),
      new Card(0,0,0,0,0),
      new Card(0,0,0,0,0),
      new Card(0,0,0,0,0),
      new Card(0,0,0,0,0),
      new Card(0,0,0,0,0),
      new Card(0,0,0,0,0),
      new Card(0,0,0,0,0),
      new Card(0,0,0,0,0)],
    this.selected = 0;
    //this.suddenDeathMode = false;
  }

  shuffle() {
  let i = 0;
  let j = 0;
  let temp = null;
  for (i = this.deck.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.deck[i];
    this.deck[i] = this.deck[j];
    this.deck[j] = temp;
  }
}

dealToPlayers() {
  this.shuffle();
  for(var i = 0; i < 10; i ++){
    if(i%2 ===1){
      this.deck[i].owner = "blue";
      this.deck[i].image = "../assets/"+this.deck[i].id+"_b.png";
      this.player1.hand.push(this.deck[i]);
    }else{
      this.deck[i].owner = "red";
      this.deck[i].image = "../assets/"+this.deck[i].id+"_r.png";
      this.player2.hand.push(this.deck[i]);
    }
  }
}

  findNeighbors(location: number){
    console.log(this.board);
    let neighbors = {left: this.board[location-2], right: this.board[location], up: this.board[location-4], down: this.board[location+2]}
    if(location <= 3){
      neighbors.up = new Card(0,0,0,0,0);
    }
    if(location >= 7){
      neighbors.down = new Card(0,0,0,0,0);
    }
    if(location % 3 === 1){
      neighbors.left = new Card(0,0,0,0,0);
    }
    if(location % 3 === 0){
      neighbors.right = new Card(0,0,0,0,0);
    }
    console.log(neighbors);
    return neighbors;
  }

  flipIt(location: number){
    let neighbors = this.findNeighbors(location);
    if(neighbors.down.up > 0 && this.board[location-1].down > neighbors.down.up){
        neighbors.down.owner = this.board[location-1].owner;
        console.log(this.board[location].image.split("_"));
        neighbors.down.image = neighbors.down.image.split("_")[0] + "_" + this.board[location-1].image.split("_")[1];

    }
  }
}
