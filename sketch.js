
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1,stone,ground,launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg;
var boyShot;


function preload()
{
	boyImg = loadImage("boy.png")
	
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy = createSprite(200,550);
boy.addImage(boyImg)
boy.scale=0.1
tree1 = new Tree (900,350,30,300)
mango1 = new Mango(900,250,15);
	mango2 = new Mango(750,200,15);
	mango3 = new Mango(800,280,15);
	mango4 = new Mango(1010,250,15);
	mango5 = new Mango(740,300,15);
	stone = new Stone(150,550,15);

	boyShot = new Shot(stone.body,{x:150,y:500});
	


var options={
	isStatic: true
}
ground=Bodies.rectangle(700, height, 1400, 20,options)
World.add(world,ground)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");

  rect(ground.position.x, ground.position.y, 1400,20)

  boy.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  boyShot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyShot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}
