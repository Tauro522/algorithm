var mr, fr;
var br1, br2;

function setup() {
  createCanvas(800,400);
  mr = createSprite(600, 200, 100, 50);
  fr = createSprite(300, 200, 50, 100);

  mr.shapeColor = "red";
  fr.shapeColor = "red";

  br1 = createSprite(600, 300, 100, 50);
  br2 = createSprite(300, 300, 50, 100);

  br1.shapeColor = "blue";
  br2.shapeColor = "blue";
  br1.velocityX  =-2;
  br2.velocityX  = 2;
}

function draw() {
  background(0);  
  mr.x = mouseX;
  mr.y = mouseY;
  if (mr.x - fr.x <= mr.width/2 + fr.width/2
    && fr.x-mr.x  <= fr.width/2 + mr.width/2
    && mr.y - fr.y <= mr.height/2 + fr.height/2
    && fr.y - mr.y <= fr.height/2 + mr.height/2){
    mr.shapeColor = "green";
  fr.shapeColor = "green";
  } 
  else{
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }


  if (br2.x - br1.x <= br1.width/2 + br2.width/2
    && br1.x-br2.x  <= br2.width/2 + br1.width/2
   ){
    br1.velocityX  = br1.velocityX * (-1);
    br2.velocityX  = br2.velocityX * (-1);
  } 
  if (br1.y - br2.y <= br1.height/2 + br2.height/2
    && br2.y - br1.y <= br2.height/2 + br1.height/2
   ){
    br1.velocityY  = br1.velocityY * (-1);
    br2.velocityY  = br2.velocityY * (-1);
  } 
  

  drawSprites();
}