const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload(){
  game.preload();
}

function draw() {
  game.drawGrid();
  game.drawPlayer();
  game.drawTreasure();
  game.score()
}
