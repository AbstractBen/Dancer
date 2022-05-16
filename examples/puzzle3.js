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


//基于基底脸的位置在（0，0）
for (var i = 1; i< 5; i++) {
  imgCb[i] = loadImage("img0425stage/head/0" + i + ".png");}
function preload() {
  face =loadImage("0425stage/head/05.png");
  imgCb[1] = loadImage("0425stage/head/01.png");
  imgCb[2] = loadImage("0425stage/head/02.png");
  imgCb[3] = loadImage("0425stage/head/03.png");
  imgCb[4] = loadImage("0425stage/head/04.png");
  posp[0]=createVector(44.2,111.9);
  posp[1]=createVector(136,109);
  posp[2]=createVector(91,117);
  posp[3]=createVector(84,207);
  texts[0]="Kracauer：The body of the dancers of the song and dance troupe is simplified into an unknown commodity and dissolved into a group without lust."
  texts[1]="Giese：The girl culture is described as sexual neutrality, so it is opposite to the image of a lady."
  texts[2]="Can we really ignore the deviance of these dance steps and leg lifts performed in the most explicit way? In the standardized apology, these dance steps and leg lifts are hardly covered up."
  texts[3]="Alfred Polgar: In 1926, on the page of die Dame magazine, this desire was compared to the national infatuation for legs. This body part was integrated into the public and became synonymous with pornography."
  dis=20;
  //imgCb[5] = loadImage("0425stage/head/05.png");
  
}

function setup() {
  rects = [];
  placeImages();
  isDragging = false;
  
  createCanvas(windowWidth, windowHeight);
  
  //var imgCb = [imgCb1,imgCb2,imgCb3,imgCb4];
  preload();
}

function placeImages() {
  var numImage = 5;
  for (var z = 1; z < numImage; z++) {
      var pos = randomPos();
      //let string iii = "1";
      //println("1");
      imgx[z]=pos.x;
      imgy[z]=pos.y;
      rects.push(new Rectangle(pos,imgCb[z]));
      
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
    text(rects[j].pos.x, 0, 20*j, 50,100);
    text(rects[j].pos.y, 200, 20*j, 50,100);
    
    
  }
  textSize(100);
 // if (rects[0].pos.x==posp[0].x){
 //   
 // }
  if ((rects[0].pos.x==posp[0].x)&&(rects[1].pos.x==posp[1].x)){
    if ((rects[2].pos.x==posp[2].x)&&(rects[3].pos.x==posp[3].x)){
      //window.location.href="index4.html";
      text("dshjsdf",100,100,500,500)
    }
  }
  rects.forEach(function(r) {
      return r.draw();
      
      
  });


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
         if ((mouseX<posp[t].x+100)&&(mouseX>posp[t].x-100)){
           if((mouseY<posp[t].y+100)&&(mouseY>posp[t].y-100)){
            var m =createVector(posp[t].x,posp[t].y);
           }
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