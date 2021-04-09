var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	backImage = loadImage("starNight.png");

	starImage = loadImage("star.png");
	fairyImage = loadAnimation("fairyImage1.png","fairyImage2.png");

	backMusic = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	backMusic.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyMoving",fairyImage);  
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImage);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650, 30, 5, {restitution:0.5, isStatic:true});
	
	World.add(world, starBody);
	
	Engine.run(engine);
}

function draw() {
  background(backImage);

  star.x = starBody.position.x 
  star.y = starBody.position.y 

  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();
}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody, false); 
	}
}