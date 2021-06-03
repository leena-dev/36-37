var playerCount, database, gameState=0, allPlayersInfo;

var game, player, form;

function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if (playerCount === 4) {
    game.updateState(1);
    clear();
    game.play();
  }
}