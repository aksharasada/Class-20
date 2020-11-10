var  movingRect, rect1, rect2, rect3;



function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,200,80,30)
  movingRect.shapeColor = "green"
  rect1 = createSprite(100, 100, 50, 50);
  rect1.shapeColor = "green";
  rect2 = createSprite( 300, 300, 50, 50);
  rect2.shapeColor = "green"
  rect3 = createSprite(400, 200, 50, 80);
  rect3.shapeColor = "green"

  
  movingRect.debug = true;
  rect1.debug = true;
  rect2.debug = true;
  rect3.debug = true;
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, rect3)){
   movingRect.shapeColor = "red";
   rect3.shapeColor = "red"
  }
  else{
   movingRect.shapeColor = "green";
   rect3.shapeColor = "green"
  }


  drawSprites();
}

