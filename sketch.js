var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("images/cityImage.png");
   balloonImage1=loadAnimation("images/hotairballoon1.png");
   balloonImage2=loadAnimation("images/hotairballoon1.png","images/hotairballoon1.png",
   "images/hotairballoon1.png","images/hotairballoon2.png","images/hotairballoon2.png",
   "images/hotairballoon2.png","images/hotairballoon3.png","images/hotairballoon3.png","images/hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y=balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y=balloon.y+10;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
