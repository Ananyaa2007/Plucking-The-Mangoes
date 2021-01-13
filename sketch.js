//defining the required CONSTANTS
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{	
  //loading the background image
  bgImg = loadImage("bg.png")
}

function setup() {
//creating the canvas
  createCanvas(3000, 800);

	engine = Engine.create();
	world = engine.world;

  //making of the BOY body
  boy= new Boy(160,540,300,500);
  //making of the TREE body
  tree = new Tree (960,350,500,700);
  //making of the MANGO bodies
	mango1 = new Mango(960,100,50);
	mango2 = new Mango(990,250,50);
	mango3 = new Mango(910,180,50);
	mango4 = new Mango(1020,50,50);
	mango5 = new Mango(1080,230,50);
	mango6 = new Mango(800,210,50);
	mango7 = new Mango(890,130,50);
	mango8 = new Mango(850,280,50);
	mango9 = new Mango(1040,150,50);
  mango10 = new Mango(1150,300,50);
  mango11 = new Mango(1180,240,50);
  //making of the STONE body
  stone = new Stone(210,418,50);
  //CONSTRAINT body making
  slingshot = new SlingShot(stone.body,{x:80,y:418});
  //making of the GROUND body
	ground = new Ground(675,680,1350,20);

	Engine.run(engine);
}

function draw() {
//Updating of the ENGINE created above
  Engine.update(engine);
//setting the background image
  background(bgImg);

//displaying the BOY body
  boy.display();
//displaying the TREE body
  tree.display();
//displaying the MANGO bodies
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
//displaying the STONE body
  stone.display();
//displaying the CONSTRAINT body
  slingshot.display();
//displaying the GROUND body
  ground.display();

//Using the DETECTCOLLISION Function
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  
//Text to be displayed on the OUTPUT screen  
textSize(35);
stroke("black");
strokeWeight(3);
fill("black");
text("Press 'Space' to Play the game Again!!",100,60);
}

//Function mouseDragged
function mouseDragged(){
	   Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
   }
//Mouse releasing function
   function mouseReleased(){
	   slingshot.fly();
   }

//function get another chance
   function keyPressed(){
	   if(keyCode === 32){
		   Matter.Body.setPosition(stone.body, {x:10, y:60})
		   slingshot.attach(stone.body);
	   }
  }
  
//DETECTCOLLISION function
	function detectCollision(lstone,lmango){

		mangoBodyPosition=lmango.mango.position
		stoneBodyPosition=lstone.body.position
		
		var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		  if(distance<=lmango.r+lstone.r)
		  {
			Matter.Body.setStatic(lmango.mango,false);
		  } 
  }