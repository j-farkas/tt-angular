export class Card{
  up:number;
  down:number;
  left:number;
  right:number;
  id:number;
  owner:string;
  image:string;

  constructor(top, bottom, left, right, id){
    this.up = top,
    this.down = bottom,
    this.left = left,
    this.right = right
    this.id = id;
    this.owner = "";
    this.image = "";
  }
}
