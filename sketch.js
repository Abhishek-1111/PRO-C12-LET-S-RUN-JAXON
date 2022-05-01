var road,roadimg
var boyImg,boy
function preload(){
  //pre-load images
  roadimg=loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road=createSprite(200,200,);
  road.addImage(roadimg);
  road.velocityY=4;
  road.scale=1.2;

 
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("a",boyImg);
  
leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(180);
if (road.y>400){
  road.y=height/2;
}



boy.x = World.mouseX;
edges=createEdgeSprites();
boy.collide(edges);
boy.collide(leftBoundary);
boy.collide(rightBoundary);


drawSprites();
}
