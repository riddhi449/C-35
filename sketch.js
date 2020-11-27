
var database;
var gameState = 0;
var playerCount = 0;
var game;
var player;
var form;


function setup(){
    createCanvas(500,500);
   
    database = firebase.database();
    game = new Game()
    game.getgameState()
    game.start()

   
}

function draw(){
    background("yellow");
   
    
}










