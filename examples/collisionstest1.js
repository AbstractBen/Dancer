//Collisions
//Collision between groups
//function called upon collision

var obstacles;
var collectibles;
var asterisk;
var transP = 0;
var transPP = 0;
//拖尾设定
let x = [],
  y = [],
  segNum = 1000,
  segLength = 5;

for (let i = 0; i < segNum; i++) {
  x[i] = 250;
  y[i] =500;
}

function setup() {
  createCanvas(570, 1080);

  strokeWeight(3);
  stroke(255, 100);
  rtd=loadImage('0425stage/right/rtd.png')
  rtdd=loadImage('0425stage/right/rtd2.png')
  //create a user controlled sprite
  asterisk = createSprite(250, 500,100,100);
  asterisk.addAnimation('normal', '0425stage/1_01.png', '0425stage/1_05.png');

  asterisk.addAnimation('stretch', '0425stage/1_01.png', '0425stage/1_05.png');
  asterisk.scale=0.5;
  //create 2 groups
  obstacles = new Group();
  collectibles = new Group();

  //for(var i=0; i<4; i++)
  //{
  //  var box = createSprite(random(0, width), random(0, height));
  //  box.addAnimation('normal', 'assets/box0001.png', 'assets/box0003.png');
  //  obstacles.add(box);
  //}

  for(var j=0; j<8; j++)
  {
    var dot = createSprite(random(0, 500), random(0, 1080));
    dot.scale=random(0.3,0.8);
    dot.addAnimation('normal', '0425stage/right/01.png', '0425stage/right/08.png');
    dot.setCollider('circle', -2,2, 100);
    dot.setSpeed(random(2, 3), random(0, 360));
    dot.mass = dot.scale;
    collectibles.add(dot);
  }

}



function draw() {
  background(20);
  //stroke(255,255);
  image(rtd, 0, 0,570,1080);
  tint(255, transP);
  image(rtdd, 0, 0,570,1080);
  tint(255,255);
  collectibles.bounce(collectibles);
  //if no arrow input set velocity to 0
  asterisk.velocity.x = (mouseX-asterisk.position.x)/10;
  asterisk.velocity.y = (mouseY-asterisk.position.y)/10;

  //asterisk collides against all the sprites in the group obstacles
  asterisk.collide(obstacles);

  //I can define a function to be called upon collision, overlap, displace or bounce
  //see collect() below
  asterisk.overlap(collectibles, collect);

  //if the animation is "stretch" and it reached its last frame
  if(asterisk.getAnimationLabel() == 'stretch' && asterisk.animation.getFrame() == asterisk.animation.getLastFrame())
  {
    asterisk.changeAnimation('normal');
  }
  dragSegment(0, asterisk.position.x,asterisk.position.y);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
  //边距碰撞
  for(var i=0; i<collectibles.length; i++) {
    var s = collectibles[i];
    if(s.position.x<0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if(s.position.x>width) {
      s.position.x = width-1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if(s.position.y<0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if(s.position.y>height) {
      s.position.y = height-1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }
  drawSprites();
  fill(0,transPP);
  rect(0,0,570,1080);
}

//the first parameter will be the sprite (individual or from a group)
//calling the function
//the second parameter will be the sprite (individual or from a group)
//against which the overlap, collide, bounce, or displace is checked
function collect(collector, collected)
{
  //collector is another name for asterisk
  //show the animation
  collector.changeAnimation('stretch');
  collector.animation.rewind();
  //collected is the sprite in the group collectibles that triggered
  //the event
  //collected.remove();
if (transP<255){
  transP+=2;}
  else {
    transP=255;
    transPP+=15;}
  if (transPP>=255){
  transPP=255;}
}
function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  (x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}