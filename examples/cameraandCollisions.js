//虚拟摄像机
//移动鼠标
//Sprite跟随鼠标但居中于画布
//因为摄像机跟随它

var ghost;
var bg;
var frame;
//该场景大小是画布大小的两倍
var rX=570;
var rY = 1080;
var lX =1336;
var lY = 1080;
var SCENE_W = lX*2.3;
var SCENE_H = lY*2.3;
var rlx= lX+100+1920-lX;
var rly= lY+100;
//根据画布和场景大小重新定位一些物体
var obstacles;
var collectibles;
var asterisk;
var transP = 0;
var transPP = 0;
//拖尾设定
var pox =new Array(200);//声明一个x数组存储50个鼠标坐标的x值
var poy=new Array(200);//声明一个x数组存储50个鼠标坐标的y值



function setup() {
  createCanvas(1920, 1080);
  strokeWeight(3);
  stroke(255, 100);
  rtd=loadImage('0425stage/right/rtd.png')
  rtdd=loadImage('0425stage/right/rtd2.png')
  //create a user controlled sprite
  asterisk = createSprite(lX+rX/2, rY/2,100,100);
  asterisk.addAnimation('normal', '0425stage/1_01.png', '0425stage/1_05.png');

  asterisk.addAnimation('stretch', '0425stage/1_01.png', '0425stage/1_05.png');
  asterisk.scale=0.5;
  //create 2 groups
  obstacles = new Group();
  collectibles = new Group();
  splats = new Group();
  for(var i=0;i<pox.length;i++){
    pox[i]=0;
    poy[i]=0;
  }
  //var dancerAni = loadAnimation("0425stage/alpha/dancer00.png", "0425stage/alpha/dancer23.png");
  //for(var i=0; i<4; i++)
  //{
  //  var box = createSprite(random(0, width), random(0, height));
  //  box.addAnimation('normal', 'assets/box0001.png', 'assets/box0003.png');
  //  obstacles.add(box);
  //}

  for(var j=0; j<8; j++)
  {
    var dot = createSprite(random(lX, lX+rX), random(0, rY));
    dot.scale=random(0.3,0.8);
    dot.addAnimation('normal', '0425stage/right/01.png', '0425stage/right/08.png');
    dot.setCollider('circle', -2,2, 100);
    dot.setSpeed(random(2, 3), random(0, 360));
    dot.mass = dot.scale;
    collectibles.add(dot);
  }


  //制作sprite并添加三个动画
  ghost = createSprite(-lX, -lY);

  
  //var myAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
 // var myAnimation = ghost.addAnimation('floating', '0425stage/dancer.png', '0425stage/dancer1.png');
 // myAnimation.offY = 18;

  ghost.addAnimation('moving', '0425stage/alpha/dancer00.png','0425stage/alpha/dancer23.png')

  
  bg = loadImage('0425stage/citybg.png')
  dancer =loadImage('0425stage/dancer.png')
  
  lt=loadImage('0425stage/light.png')
  stf=loadImage('0425stage/front1.png')//front
  stb=loadImage('0425stage/front2.png')//back
  stl=loadImage('0425stage/frontlight.png')
  tit=loadImage('0425stage/titlee.png')

  rpic=loadImage('0425stage/0427.jpg')
  //bg = new Group();

  //create some background for visual reference
  //背景的视觉制作
  //for(var i=0; i<80; i++)
  //{
    //制作sprite并添加三个动画(在该页面随机生成80个石头)，使用了group的用法
    //var rock = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
    //循环 rocks 0 1 2
    //rock.addAnimation('normal', 'assets/rocks'+i%3+'.png');
    //bg.add(rock);
  //}

  frame = loadImage('0425stage/curtain.png');
  //上图为前景
  t1 = loadImage('0425stage/alpha/01.png')
  t2 = loadImage('0425stage/alpha/02.png')
  t3 = loadImage('0425stage/alpha/03.png')
  t4 = loadImage('0425stage/alpha/04.png')
  t5 = loadImage('0425stage/alpha/05.png')
}

function draw() {
  background(255, 255, 255);
  
  
  //mouse trailer, the speed is inversely proportional to the mouse distance
  //鼠标跟踪，速度和鼠标距离成反比
 // ghost.velocity.x = (camera.mouseX-ghost.position.x)/50;
  ghost.velocity.x=0;
  //ghost.velocity.y = (camera.mouseY-ghost.position.y)/50;
  ghost.velocity.y =0;

  //a camera is created automatically at the beginning

  //.5 zoom is zooming out (50% of the normal size)


  //set the camera position to the ghost position

  xxx=1336;
  yyy=1080;
  camera.position.x =  (camera.mouseX-xxx)/10;
  camera.position.y =  (camera.mouseY-yyy)/10;
  if((mouseIsPressed)&&(mouseButton==LEFT)){
  camera.zoom = 1;
  camera.position.x =  (camera.mouseX-xxx)/10;
  camera.position.y =  (camera.mouseY-yyy)/10+700;
}
else{
  camera.zoom = 0.5;
}
  //bg
  var bgx=(camera.mouseX-xxx)/5;
  var bgy=(camera.mouseY-yyy)/5;
  //Light,more movement than dancer
  var flx=(camera.mouseX-xxx)/8;
  var fly=(camera.mouseY-yyy)/8;
  var stxl=(camera.mouseX-xxx)/9;
  var styl=(camera.mouseY-yyy)/9;
  //Dancer
  var dcx=(camera.mouseX-xxx)/10;
  var dcy=(camera.mouseY-yyy)/10;
  ghost.position.x = dcx-500;
  ghost.position.y = dcy;
  ghost.scale=2;
  //stage，less movement，similar to dancer
  var stxb=(camera.mouseX-xxx)/9.5;
  var styb=(camera.mouseY-yyy)/9.5;
  var stxf=(camera.mouseX-xxx)/11;
  var styf=(camera.mouseY-yyy)/11;
  //curtain,less movement
  var frx=(camera.mouseX-xxx)/20;
  var fry=(camera.mouseY-yyy)/20;


  //limit the ghost movements
  if(camera.position.x < 0)
  camera.position.x = 0;
  if(camera.position.y < 0)
  camera.position.y = 0;
  if(camera.position.x > SCENE_W)
  camera.position.x = SCENE_W;
  if(camera.position.y > SCENE_H)
  camera.position.y = SCENE_H;

  //draw the scene
  //rocks first
  //drawSprites(bg);

  //shadow using p5 drawing
  noStroke();
  fill(0, 0, 0, 20);
  //shadow
  //ellipse(ghost.position.x, ghost.position.y+90, 80, 30);
  //character on the top
  image(bg, bgx-rlx, bgy-rly,SCENE_W,SCENE_H);
  
  image(lt, flx-rlx, fly-rly,SCENE_W,SCENE_H);
  image(tit, stxl-rlx, styl-rly+200,SCENE_W,SCENE_H);
  image(stl, stxl-rlx, styl-rly,SCENE_W,SCENE_H);
  image(stb,stxb-rlx,styb-rly,SCENE_W,SCENE_H);
  image(stf,stxf-rlx,styf-rly,SCENE_W,SCENE_H);
  //image(dancer, dcx-rlx, dcy-rly,SCENE_W,SCENE_H);
  //animation(dancerAni, dcx-rlx, dcy-rly);
  drawSprite(ghost);
  drawSprites(splats);
  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at
  //the absolute 0,0 (try to see what happens if you don't turn it off
  image(frame, frx-rlx+100, fry-rly+100,SCENE_W*0.9,SCENE_H*0.9);
  //image(rpic, frx-rlx+100, fry-rly+100,SCENE_W*0.9,SCENE_H*0.9);
  camera.off();
  //image(rpic,lX, 0,1920-lX,lY);
  fill(50);
  //右侧的页面
  rect(lX,0,rX,rY);
  image(rtd, lX, 0,rX,rY);
  //tint(255, transP);
  //image(rtdd, lX, 0,rX,rY);
  //根据transP的值分段显示
  if (transP >=50){
    image(t1, lX, 0,rX,rY);
  }
  if (transP >=100){
    image(t2, lX, 0,rX,rY);
  }
  if (transP >=150){
    image(t3, lX, 0,rX,rY);
  }
  if (transP >=200){
    image(t4, lX, 0,rX,rY);
  }
  if (transP >=250){
    image(t5, lX, 0,rX,rY);
  }
  //tint(255,255);

  
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
    if(s.position.x<lX) {
      s.position.x = lX;
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
  
    var d = asterisk;
    if(d.position.x<lX+70) {
      d.position.x = lX+70;
      //d.velocity.x = abs(d.velocity.x);
      d.velocity.x = 0;
    }

    if(d.position.x>width) {
      d.position.x = width-1;
      //d.velocity.x = -abs(d.velocity.x);
      d.velocity.x = 0;
    }

    if(d.position.y<0) {
      d.position.y = 1;
      d.velocity.y = abs(d.velocity.y);
    }

    if(d.position.y>height) {
      d.position.y = height-1;
      d.velocity.y = -abs(d.velocity.y);
    }
   drawSprites(collectibles);
  drawSprite(asterisk);
  
  fill(0,transPP);
  rect(lX,0,570,1080);
  
}
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
  text(s, lX+20, 50, 70*3, 80*10); // Text wraps within text box
if (transP<255){
  transP+=0.2;}
  else {
    transP=255;
    transPP+=15;}
  if (transPP>=255){
  transPP=255;
  window.location.href="index4.html";


}
}
function mousePressed() {
	//create a sprite
  if(mouseButton==RIGHT){
	let splat = createSprite(camera.mouseX,camera.mouseY);
	//splat.addAnimation('normal', 'assets/asterisk_explode0001.png', 'assets/asterisk_explode0011.png');
  splat.addAnimation(
		'normal',
		'0425stage/coin/1.png',
		'0425stage/coin/2.png',
	//	'assets/square.png',
	//	'assets/cloud.png',
	//	'assets/star.png',
	//	'assets/mess.png',
	//	'assets/monster.png'
	);

	//and set it to a random frame
	splat.animation.stop();
	let f = round(random(0, splat.animation.getLastFrame()));
	splat.animation.changeFrame(f);
  splat.setCollider('circle', -2, 2, 55);

  //splat.collide(ghost)
	//set a self destruction timer (life)
	splat.life = 90;
  splats.add(splat)
  splat.debug = true;
  }
}
