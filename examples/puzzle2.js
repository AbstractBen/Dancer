var puzzle1;
var puzzle2;

var draggedSprite;
function setup() {

    aa=loadImage('0425stage/head/01.png')
    bb=loadImage('0425stage/head/02.png')
    cc=loadImage('0425stage/head/03.png')
    dd=loadImage('0425stage/head/04.png')
    ee=loadImage('0425stage/head/05.png')

    createCanvas(1920, 1080);
    puzzles = new Group();
    puzzle1 = createSprite(200, 200);
    puzzle1.addAnimation('normal', '0425stage/head/01.png', '0425stage/head/01.png');
    puzzle2 = createSprite(200, 200);
    puzzle2.addAnimation('normal', '0425stage/head/02.png', '0425stage/head/02.png');
    puzzle3 = createSprite(200, 200);
    puzzle3.addAnimation('normal', '0425stage/head/03.png', '0425stage/head/03.png');
    //detect the mouse position and click on this sprite
    //if no collider is defined, the image bounding box will be checked
    //puzzle1.mouseActive = true;
  
    //asterisk = createSprite(600, 200);
    //asterisk.addAnimation('normal', 'assets/asterisk_normal0001.png', 'assets/asterisk_normal0003.png');
    //asterisk.addAnimation('stretch', 'assets/asterisk_stretching0001.png', 'assets/asterisk_stretching0008.png');
    //var anim = asterisk.addAnimation('transform', 'assets/asterisk_circle0001.png', 'assets/asterisk_circle0008.png');
  
    //if defined, the collider will be used for mouse events
    puzzle1.setCollider('circle', 0, 0, 50);
    puzzle2.setCollider('circle', 0, 0, 50);
    puzzle3.setCollider('circle', 0, 0, 50);
    //I can assign functions to be called upon specific mouse events
    //within the function "this" will reference the sprite that triggered the event
//1
    puzzle1.onMouseOver = function() {
      this.changeAnimation('stretch');
    };
  
    puzzle1.onMouseOut = function() {
      this.changeAnimation('normal');
    };
  
    puzzle1.onMousePressed = function() {
      this.changeAnimation('transform');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
        draggedSprite = this;
      }
    };
//2
    puzzle2.onMouseReleased = function() {
      this.changeAnimation('transform');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
    } 
    puzzle2.onMouseOver = function() {
        this.changeAnimation('stretch');
      };
    
      puzzle2.onMouseOut = function() {
        this.changeAnimation('normal');
      };
    
      puzzle2.onMousePressed = function() {
        this.changeAnimation('transform');
        this.animation.goToFrame(this.animation.getLastFrame());
        if (draggedSprite == null) {
          draggedSprite = this;
        }
        if (draggedSprite = this) {
           putOnTop(index);}
      };
    
      puzzle2.onMouseReleased = function() {
        this.changeAnimation('transform');
        this.animation.goToFrame(0);
        if (draggedSprite == this) {
          draggedSprite = null;
        }
      }  
  
}



    function draw() {
        background(255, 255, 255);
      
        if (draggedSprite != null) {
          draggedSprite.position.x = mouseX;
          draggedSprite.position.y = mouseY;
        }
        text(puzzle1.position.x, 0, 0, 100, 200)
        puzzle1.debug = mouseIsPressed;
        puzzle2.debug = mouseIsPressed;
        puzzle3.debug = mouseIsPressed;
        drawSprites();
      }
    
      function putOnTop(index) {
        draggedSprite.splice(index, 1);
        //draggedSprite.push(dragRec);
    }
