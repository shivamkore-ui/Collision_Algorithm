var fixedRect, movingRect;
var box1, box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(800, 400, 50, 80);
  box1.shapeColor = "green";
  box1.debug = true;
  box2 = createSprite(700,200,80,30);
  box2.shapeColor = "green";
  box2.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, box2)){
    box2.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else {
    box2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}

