let randomCol = Math.floor(Math.random() * (10 - 0));
let randomRow = Math.floor(Math.random() * (10 - 0));

randomCol *= 100
randomRow *= 100


class Game {

  constructor() {
		this.player = new Player()
    this.treasure = new Treasure()
   this.count = 0;
		
	}


  preload() {
		this.player.image = loadImage('../assets/hase.png')
    this.treasure.image = loadImage('../assets/mohren.png')
  }

 


  drawGrid() {
    clear()
    let columnX1 = 0
    let columnY1 = 0
    let columnX2 = 0
    let columnY2 = 1000

    let rowX1 = 0
    let rowY1 = 0
    let rowX2 = 1000
    let rowY2 = 0


    for(let i= 0; i<9 ; i++) {
      columnX1 += 100  
      columnX2 += 100
      line(columnX1, columnY1, columnX2, columnY2)
    }

    for(let j= 0; j<9 ; j++) {
      rowY1 += 100
      rowY2 += 100
      line(rowX1, rowY1, rowX2, rowY2)
    }

    
  }

  drawPlayer(){
  
    this.player.draw()
   
  }

  drawTreasure(){
    this.treasure.setRandomPosition()
    this.treasure.draw()
    
  }




  score(){
    if(this.player.col === this.treasure.col && this.player.row === this.treasure.row){
      this.count += 1
     document.getElementById("scoreEl").innerHTML = this.count

     game.drawGrid();
     game.drawPlayer();
     game.drawTreasure();
     
      this.player.col = 0
     this.player.row = 0

    
      console.log(this.treasure.col + " and " + this.treasure.row )
    } 

 
  }


}

class Player {

	constructor() {
		this.col = 0
		this.row = 0
    this.width = 100 
		this.height = 100
    this.image
  }

  draw() {
		image(this.image, this.row, this.col, this.width, this.height)
	}

	moveRight() {
		this.row += 100
    
	}
	moveLeft() {
		this.row -= 100
	}
	moveUp() {
		this.col -= 100
	}
	moveDown() {
		this.col += 100
	}


}

function keyPressed() {
	if (keyCode === 39) {
		game.player.moveRight()
   
	}
	if (keyCode === 37) {
		game.player.moveLeft()
	}
	if (keyCode === 38) {
		game.player.moveUp()
	}
	if (keyCode === 40) {
		game.player.moveDown()
	}
}




class Treasure {

  constructor() {
		this.col = 0
		this.row = 0
    this.width = 100 
		this.height = 100
    this.image
  }


  setRandomPosition(){

    this.col = randomCol
    this.row = randomRow

  }

  draw() {
   // this.setRandomPosition()
		image(this.image, this.row, this.col, this.width, this.height)
	}

}

