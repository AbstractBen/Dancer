/*
  Johan Karlsson (DonKarlssonSan)
  Dragging images
*/
var Rectangle = (function() {
  function Rectangle(pos, img) {
      this.pos = pos;
      this.img = img;
      this.width = img.width;
      this.height = img.height;
  }
  Rectangle.prototype.draw = function() {
      image(this.img, this.pos.x, this.pos.y);
  };
  Rectangle.prototype.hits = function(hitpos) {
      if (hitpos.x > this.pos.x &&
          hitpos.x < this.pos.x + this.width &&
          hitpos.y > this.pos.y &&
          hitpos.y < this.pos.y + this.height) {
          return true;
      }
      return false;
  };
  return Rectangle;
}());
var rects;
var dragRec;
var isDragging;
var clickOffset;
var imgCb= [];
var imgx=[];
var imgy=[];
var face;
var posp=[];
var index;
var texts=[];
var pp=[];

var x1=164
var y1=905
var r1=120

var x2=689
var y2=944
var r2=150

var x3=1372
var y3=971
var r3=200

var x4=1774
var y4=835
var r4=100

var ts=0;
//基于基底脸的位置在（0，0）
for (var i = 1; i< 5; i++) {
  imgCb[i] = loadImage("img0425stage/head/0" + i + ".png");}
function preload() {
  human=loadImage("0425stage/head/12.png");
  face =loadImage("0425stage/head/07.png");
  imgCb[1] = loadImage("0425stage/head/08.png");
  imgCb[2] = loadImage("0425stage/head/09.png");
  imgCb[3] = loadImage("0425stage/head/10.png");
  imgCb[4] = loadImage("0425stage/head/11.png");
  posp[0]=createVector(859,527);
  posp[1]=createVector(939,524);
  posp[2]=createVector(901,528);
  posp[3]=createVector(892,609);
  texts[0]="Kracauer：The body of the dancers of the song and dance troupe is simplified into an unknown commodity and dissolved into a group without lust."
  texts[1]="Giese：The girl culture is described as sexual neutrality, so it is opposite to the image of a lady."
  texts[2]="Can we really ignore the deviance of these dance steps and leg lifts performed in the most explicit way? In the standardized apology, these dance steps and leg lifts are hardly covered up."
  texts[3]="Alfred Polgar: In 1926, on the page of die Dame magazine, this desire was compared to the national infatuation for legs. This body part was integrated into the public and became synonymous with pornography."
  dis=14;
  pp[1]=createVector(220,601);
  pp[2]=createVector(909,785);
  pp[3]=createVector(1361,647);
  pp[4]=createVector(1658,416);

  //imgCb[5] = loadImage("0425stage/head/05.png");
  
}

function setup() {
  talks = loadAnimation("0425stage/head/talk/01.png", "0425stage/head/talk/30.png");
  rects = [];
  placeImages();
  isDragging = false;
  
  createCanvas(1920, 1080);
  p1= loadImage('0425stage/head/p1.png')
  p2= loadImage('0425stage/head/p2.png')
  p3= loadImage('0425stage/head/p3.png')
  p4= loadImage('0425stage/head/p4.png')
  t1= loadImage('0425stage/head/t1.png')
  t2= loadImage('0425stage/head/t2.png')
  t3= loadImage('0425stage/head/t3.png')
  t4= loadImage('0425stage/head/t4.png')
  //var imgCb = [imgCb1,imgCb2,imgCb3,imgCb4];
  preload();

}

function placeImages() {
  var numImage = 5;
  for (var z = 1; z < numImage; z++) {
      //var pos = randomPos();
      //let string iii = "1";
      //println("1");
      imgx[z]=pp[z].x;
      imgy[z]=pp[z].y;
      rects.push(new Rectangle(pp[z],imgCb[z]));
      
  }
}

function randomPos() {
  return createVector(random(0, windowWidth), random(0, windowHeight));
}

function draw() {
  clear();

  //text(iii, 0, 0, 50, 100)
  image(face,0,0);
  for (var j = 0; j< 4; j++) {
    text(rects[j].pos.x, 200, 20*j, 50,100);
    text(rects[j].pos.y, 400, 20*j, 50,100);
    
    
  }
  text(mouseX+","+mouseY,500,500)
  
  image(human,0,0);

  if(dist(mouseX,mouseY,x1,y1)<r1){
 
    //ellipse(x1,y1,r1,r1);
    //if(mouseIsPressed){
    image(p2, 0, 0,1920,1080);
    image(t2, 0, 0,1920,1080);
  //}
  }
  if(dist(mouseX,mouseY,x2,y2)<r2){
    //ellipse(x2,y2,r2,r2);
    //if(mouseIsPressed){
    image(p4, 0, 0,1920,1080);
    image(t4, 0, 0,1920,1080);
  //}
  }
  if(dist(mouseX,mouseY,x3,y3)<r3){
    //ellipse(x3,y3,r3,r3);
    //if(mouseIsPressed){
    image(p1, 0, 0,1920,1080);
    image(t1, 0, 0,1920,1080);
  //}
  }
  if(dist(mouseX,mouseY,x4,y4)<r4){
    //ellipse(x4,y4,r4,r4);
   // if(mouseIsPressed){
    image(p3, 0, 0,1920,1080);
    image(t3, 0, 0,1920,1080);
  //}
  }
  animation(talks, 1920/2, 1080/2);
  textSize(100);
 // if (rects[0].pos.x==posp[0].x){
 //   
 // }
  
  rects.forEach(function(r) {
      return r.draw();
      
      
  });
  if ((rects[0].pos.x==posp[0].x)&&(rects[1].pos.x==posp[1].x)){
    if ((rects[2].pos.x==posp[2].x)&&(rects[3].pos.x==posp[3].x)){
      ts+=2;
      fill(255,ts);
      rect(0,0,1920,1080)
      if(ts>=255){
      window.location.href="index4.html";}
      //text("dshjsdf",100,100,500,500)
    }
  }

  //text(rects[3].pos.x, 90, 90, 100,200);
  //text(rects[4].pos.x, 90, 90, 100,200);
}

function mousePressed() {
  var m = createVector(mouseX, mouseY);

  rects.forEach(function(r, i) {
      if (r.hits(m)) {
          clickOffset = p5.Vector.sub(r.pos, m);
          isDragging = true;
          dragRec = r;
          index = i;
      }
      
  });
  if (isDragging) {
      //putOnTop(index);
      
  }
  
}

function putOnTop(index) {
  rects.splice(index, 1);
  rects.push(dragRec);
  
}

function mouseDragged() {
  
  if (isDragging) {
    var t=index;
    //text(index,100,100,100,100);
    //想调用当前正在拖拽矩形的编号？？
      //if (index=0){
         if ((mouseX<posp[t].x+80)&&(mouseX>posp[t].x-80)){
           if((mouseY<posp[t].y+80)&&(mouseY>posp[t].y-80)){
            var m =createVector(posp[t].x,posp[t].y);
           }else{
            var m = createVector(mouseX, mouseY);
            var m = m.add(clickOffset)}
         //dragRec.pos.set(m).add(clickOffset);
         }else{
          var m = createVector(mouseX, mouseY);
          var m = m.add(clickOffset)}
  
          //rects[0].pos.set(posp1);
         
         
  
     //}
      
      
      
      //imgx[i]=m.add(clickOffset).x;
      //imgy[i]=m.add(clickOffset).y;
      //if(rects[0].pos.x<posp1+dis&&rects[0].pos.x>posp1-dis){
    //rects[0].pos.set(posp1);
    //if(rects[0].pos.x<posp1+dis&&rects[0].pos.x>posp1-dis){
     // rects[0].pos.set(posp1);
   // }
   
  }
  dragRec.pos.set(m);
  textSize(20);
  textAlign(CENTER);
  text(texts[index],dragRec.pos.x-50,dragRec.pos.y-50,200,200);
  
}

function mouseReleased() {
  isDragging = false;
  //if(rects[1].pos.x<posp1+dis&&rects[1].pos.x>posp1-dis){
  //  rects[1].pos.set(posp1);
  //}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}