var canvas, backgroundImage;

var database;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  man = new Man();
  man.getState();
  man.start();
}


function draw(){
  if(playerCount === 4){
    man.update(1);
  }
  if(gameState === 1){
    clear();
    man.play();
  }
}
