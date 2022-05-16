//虚拟摄像机
//移动鼠标
//Sprite跟随鼠标但居中于画布
//因为摄像机跟随它

var ghost;
var bg;
var frame;
//该场景大小是画布大小的两倍
var lX =1336;
var lY = 1080;
var SCENE_W = lX*2.3;
var SCENE_H = lY*2.3;
var rlx= lX+100+1920-lX;
var rly= lY+100;
//根据画布和场景大小重新定位一些物体

function setup() {
  createCanvas(1920, 1080);

  //制作sprite并添加三个动画
  ghost = createSprite(-lX, -lY, lX,lY);

  
  //var myAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
  var myAnimation = ghost.addAnimation('floating', '0425stage/dancer.png', '0425stage/dancer1.png');
 // myAnimation.offY = 18;

  ghost.addAnimation('moving', '0425stage/dancer.png', '0425stage/dancer1.png');

  
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
  ghost.position.x = 1336;
  ghost.position.y =  1080;
  camera.position.x =  (camera.mouseX-ghost.position.x)/10;
  camera.position.y =  (camera.mouseY-ghost.position.y)/10;
  if(mouseIsPressed){
  camera.zoom = 1;
  camera.position.x =  (camera.mouseX-ghost.position.x)/10;
  camera.position.y =  (camera.mouseY-ghost.position.y)/10+700;
}
else{
  camera.zoom = 0.5;
}
  //bg
  var bgx=(camera.mouseX-ghost.position.x)/5;
  var bgy=(camera.mouseY-ghost.position.y)/5;
  //Light,more movement than dancer
  var flx=(camera.mouseX-ghost.position.x)/8;
  var fly=(camera.mouseY-ghost.position.y)/8;
  var stxl=(camera.mouseX-ghost.position.x)/9;
  var styl=(camera.mouseY-ghost.position.y)/9;
  //Dancer
  var dcx=(camera.mouseX-ghost.position.x)/10;
  var dcy=(camera.mouseY-ghost.position.y)/10;
  //stage，less movement，similar to dancer
  var stxb=(camera.mouseX-ghost.position.x)/9.5;
  var styb=(camera.mouseY-ghost.position.y)/9.5;
  var stxf=(camera.mouseX-ghost.position.x)/11;
  var styf=(camera.mouseY-ghost.position.y)/11;
  //curtain,less movement
  var frx=(camera.mouseX-ghost.position.x)/20;
  var fry=(camera.mouseY-ghost.position.y)/20;


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
  image(dancer, dcx-rlx, dcy-rly,SCENE_W,SCENE_H);
  
  //drawSprite(ghost);

  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at
  //the absolute 0,0 (try to see what happens if you don't turn it off
  image(frame, frx-rlx+100, fry-rly+100,SCENE_W*0.9,SCENE_H*0.9);
  //image(rpic, frx-rlx+100, fry-rly+100,SCENE_W*0.9,SCENE_H*0.9);
  camera.off();
  image(rpic,lX, 0,1920-lX,lY);
  
  
}
