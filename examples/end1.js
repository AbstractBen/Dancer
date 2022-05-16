//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var ghost, asterisk;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

  //create an animation from a sequence of numbered images
  //pass the first and the last file name and it will try to find the ones in between
  
  imagess=[];
  imagess=['0425stage/curtainend/001.png', '0425stage/curtainend/002.png']
  curt=loadAnimation('0425stage/curtainend/001.png', '0425stage/curtainend/002.png');
  curt.looping = false;
  //curt.scale(2,2);
  //create an animation listing all the images files
  //asterisk = loadAnimation('assets/asterisk.png', 'assets/triangle.png', 'assets/square.png', 'assets/cloud.png', 'assets/star.png', 'assets/mess.png', 'assets/monster.png');
}

function setup() {
  createCanvas(1920, 1080);
  //var ghost=createSprite(1920/2,1080/2);
  //ghost.scale=1.5;
}

function draw() {
  background(0);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  //curt.scale=1.5;
  animation(curt, 1920/2, 1080/2,1920,1080);

  //drawSprites();
  
  //animation(asterisk, 500, 150);
}
