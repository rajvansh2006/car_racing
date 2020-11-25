var database;
var playerCount=0;
var gameState;
var game, form, player;
var car1,car2,car3,car4;
var cars=[]
var allPlayers;
var car1img,car2img,car3img,car4img;
var groundimg;
var trackimg;
var firstimg,lastimg;

function preload(){
  car1img=loadImage("images/car1.png");
  car2img=loadImage("images/car2.png");
  car3img=loadImage("images/car3.png");
  car4img=loadImage("images/car4.png");
  trackimg=loadImage("images/track.jpg");
  groundimg=loadImage("images/ground.png");
firstimg=loadImage("images/fisrt_page.jpg");
lastimg=loadImage("images/last_page.jpg");

}
function setup(){
  database=firebase.database();
   createCanvas(displayWidth-20,displayHeight-140);

   game = new Game();
   game.getState();
   game.start();
}

function draw(){
  background("white");
  if(gameState===0){
    background(firstimg);

  }
if(playerCount===4){
  game.updateState(1);
}
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    clear();
    background(lastimg);
      game.end();
  }
}

