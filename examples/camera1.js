//虚拟摄像机
//移动鼠标
//Sprite跟随鼠标但居中于画布
//因为摄像机跟随它
var goi=0.49;
var go1=0.01;
var ghost;
var bg;
var frame;
//该场景大小是画布大小的两倍
var lX =1920;
var lY = 1080;
var SCENE_W = lX*2.2;
var SCENE_H = lY*2.2;
var rlx= lX+100+1920-lX;
var rly= lY+100;
var x1=117
var y1=462
var r1=120

var x2=1793
var y2=596
var r2=150

var x3=1891
var y3=835
var r3=200

var x4=1408
var y4=809
var r4=100

var x5=855
var y5=558
var r5=300
//根据画布和场景大小重新定位一些物体

function setup() {
  createCanvas(1920, 1080);

  //制作sprite并添加三个动画
  ghost = createSprite(-lX, -lY);
  ghost.addAnimation('moving', '0425stage/blink/0100.png', '0425stage/blink/0137.png');

  workers = createSprite(-lX, -lY);
  workers.addAnimation('moving', '0425stage/rolling/01.png', '0425stage/rolling/90.png');

  
  bg = loadImage('0425stage/street/07.png')
  dancer =loadImage('0425stage/street/06.png')
  lt=loadImage('0425stage/street/05.png')
  stf=loadImage('0425stage/street/04.png')//front
  stb=loadImage('0425stage/street/03.png')//back
  stl=loadImage('0425stage/street/02.png')
  tit=loadImage('0425stage/street/01.png')

 p1= loadImage('0425stage/click/05.png')
 p2= loadImage('0425stage/click/06.png')
 p3= loadImage('0425stage/click/07.png')
 p4= loadImage('0425stage/click/08.png')
  //rpic=loadImage('0425stage/0427.jpg')
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
  


  
  //var myAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
 // var myAnimation = ghost.addAnimation('floating', '0425stage/dancer.png', '0425stage/dancer1.png');
 // myAnimation.offY = 18;

  //ghost.addAnimation('moving', '0425stage/blink/0100.png','0425stage/blink/0137.png')

  //mouse trailer, the speed is inversely proportional to the mouse distance
  //鼠标跟踪，速度和鼠标距离成反比
 // ghost.velocity.x = (camera.mouseX-ghost.position.x)/50;
  ghost.velocity.x=0;
  //ghost.velocity.y = (camera.mouseY-ghost.position.y)/50;
  ghost.velocity.y =0;

  //a camera is created automatically at the beginning

  //.5 zoom is zooming out (50% of the normal size)


  //set the camera position to the ghost position
  xxx=540;
  yyy=1080;

  if(mouseIsPressed&&(dist(mouseX,mouseY,x5,y5)<r5)){
    camera.position.x =-200
    camera.position.y =-150
   // camera.position.x = -500;
   // camera.position.y = -300;
    //var going = true;
    go1+=0.01;
    goi +=0.05*go1;
  camera.zoom = goi;


}
 
//if(going=true){
  
 // camera.zoom = goi;
//}
else{
  camera.zoom = 0.49;
  goi=0.49;
  go1=0.01;
  camera.position.x =  (camera.mouseX-xxx)/10;
  camera.position.y =  (camera.mouseY-yyy)/10;
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
  //ghost.position.x = dcx-500;
  //ghost.position.y = dcy;
  //ghost.scale=2;
  //stage，less movement，similar to dancer
  var stxb=(camera.mouseX-xxx)/9.5;
  var styb=(camera.mouseY-yyy)/9.5;
  var stxf=(camera.mouseX-xxx)/11;
  var styf=(camera.mouseY-yyy)/11;
  //curtain,less movement
  var frx=(camera.mouseX-xxx)/20;
  var fry=(camera.mouseY-yyy)/20;


  //limit the ghost movements
  if(camera.position.x < -300)
  camera.position.x = -300;
  if(camera.position.y < -300)
  camera.position.y = -300;
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
  image(dancer, stxf-rlx,styf-rly,SCENE_W,SCENE_H);
  image(bg, bgx-rlx, bgy-rly,SCENE_W,SCENE_H);
  image(lt, flx-rlx, fly-rly,SCENE_W,SCENE_H);
  ghost.position.x = stxl-rlx+1920+190;
  ghost.position.y = styl-rly+1080+110;
  ghost.scale=2.2;
  image(stf,stxl-rlx,styl-rly,SCENE_W*1,SCENE_H*1);
  image(stl, stxl-rlx, styl-rly,SCENE_W,SCENE_H);
  image(stb,stxb-rlx,styb-rly,SCENE_W,SCENE_H);
 
  image(tit, frx-rlx-250, fry-rly-550,SCENE_W*1.2,SCENE_H*1.2);
  //image(p1,500,500,lx,ly);
  drawSprite(ghost);

  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at
  //the absolute 0,0 (try to see what happens if you don't turn it off
  //image(frame, frx-rlx+100, fry-rly+100,SCENE_W*0.9,SCENE_H*0.9);
  //image(rpic, frx-rlx+100, fry-rly+100,SCENE_W*0.9,SCENE_H*0.9);
  
  camera.off();
  
  noFill();
  stroke(255);
  //(noStroke);
  if(dist(mouseX,mouseY,x1,y1)<r1){
 
    ellipse(x1,y1,r1,r1);
    if(mouseIsPressed){
    image(p1, 0, 0,1920,1080);}
  }
  if(dist(mouseX,mouseY,x2,y2)<r2){
    ellipse(x2,y2,r2,r2);
    if(mouseIsPressed){
    image(p2, 0, 0,1920,1080);}
  }
  if(dist(mouseX,mouseY,x3,y3)<r3){
    ellipse(x3,y3,r3,r3);
    if(mouseIsPressed){
    image(p3, 0, 0,1920,1080);}
  }
  if(dist(mouseX,mouseY,x4,y4)<r4){
    ellipse(x4,y4,r4,r4);
    if(mouseIsPressed){
    image(p4, 0, 0,1920,1080);}
  }
  if((mouseIsPressed === false)&&(dist(mouseX,mouseY,x5,y5)<r5)){
    ellipse(x5,y5,r5,r5);
  }

  if(mouseIsPressed&&(dist(mouseX,mouseY,x5,y5)<r5)){
    var trs=map(goi, 0.49, 1.5, 0, 255)
    fill(255,trs);
    if (trs>=255){
      window.location.href="index7.html";
    }
   rect(0,0,1920,1080);


}
 
  text(mouseX+","+mouseY,100,100,100,100);
  //image(rpic,lX, 0,1920-lX,lY);
  
  
}
