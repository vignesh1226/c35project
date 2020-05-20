var database;
var gameState = 0,voterCount = 0;
var form,voter,game;
var arr=[];

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
}


