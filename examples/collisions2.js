//Collisions
//Collision between groups
//function called upon collision

var obstacles;
var collectibles;
var asterisk;
var transP = 0;
var transPP = 0;
//拖尾设定
var pox =new Array(100);//声明一个x数组存储50个鼠标坐标的x值
var poy=new Array(100);//声明一个x数组存储50个鼠标坐标的y值

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
  for(var i=0;i<pox.length;i++){
    pox[i]=0;
    poy[i]=0;
  }
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

  
  for(var i=1;i<pox.length-1;i++){
    pox[i]=pox[i+1];
    poy[i]=poy[i+1];
  }

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
 // if(asterisk.getAnimationLabel() == 'stretch' && asterisk.animation.getFrame() == asterisk.animation.getLastFrame())
 // {
 //   asterisk.changeAnimation('normal');
 // }
  
  //最后一个数组位置填充此时的鼠标的值
  pox[pox.length-1]=asterisk.position.x;
  poy[poy.length-1]=asterisk.position.y;
  //根据该50个值绘制图形
  for(var i=0;i<pox.length-1;i++){
    noStroke();//指定没有边框
    ecolor=i*5;
    constrain(ecolor,0,255);//限制范围
    fill(ecolor);
    ellipse(pox[i],poy[i],3,3);

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
  let s = 'Female walkers are considered debauchery.';
  textSize(70);
  fill(255);
  noStroke();
  text(s, 20, 50, 70*3, 80*10); // Text wraps within text box
if (transP<255){
  transP+=2;}
  else {
    transP=255;
    transPP+=15;}
  if (transPP>=255){
  transPP=255;}
}
