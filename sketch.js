var neko, nekoimg1, nekoimg2;
var damb, dambimg1, dambimg2; 
var knive;
var dot;
var obstacle;
var kniveS,kniveH
var ground;
//var track = bg;
var width;
var bg,bgImg;
var lifes = 3;
function preload(){
bgImg = loadImage("dark dungeon.jpg");
kniveS = loadSound("Fast-Knife.mp3")
kniveH = loadSound("knife-hits.mp3")

}



function setup() {
  createCanvas(displayWidth,displayHeight-780);
  //bgs should be added 560 ahead 
  
  dot = createSprite(840,262,10,10);
  dot2 = createSprite(917,298,200,10);
  bg = createSprite(340,147,300,300);
  bg.addImage("bg",bgImg);
  //image(bg, 0,-displayWidth, displayHeight);
  bg.scale = 1.5;
  bg2 = createSprite(800,147,300,300);
  bg2.addImage("bg",bgImg);
  bg2.scale=1.5;
  bg3 = createSprite(1250,147,300,300);
  bg3.addImage("bg",bgImg);
  bg3.scale=1.5;
  bg4 = createSprite(1700,147,300,300);
  bg4.addImage("bg",bgImg);
  bg4.scale=1.5;
  bg5 = createSprite(2150,147,300,300);
  bg5.addImage("bg",bgImg);
  bg5.scale=1.5;
  bg6 = createSprite(2600,147,300,300);
  bg6.addImage("bg",bgImg);
  bg6.scale=1.5;
  bg7 = createSprite(3050,147,300,300);
  bg7.addImage("bg",bgImg);
  bg7.scale=1.5;
  bg8 = createSprite(3500,147,300,300);
  bg8.addImage("bg",bgImg);
  bg8.scale=1.5;
  bg9 = createSprite(3950,147,300,300);
  bg9.addImage("bg",bgImg);
  bg9.scale=1.5;
  
  
  ground = createSprite(2000,295,4000,10);
  ground2 = createSprite(-5,150,10,300);
  //neko = createSprite(50,262,30,30);<= REAL VALUE
  neko = createSprite(600,262,30,30);//<= TESTING VALUE
  knive = createSprite(917,-25,10,50);
  knive2 = createSprite(860,-50,10,50);
  knive3 = createSprite(974,-50,10,50);
  obstacle = createSprite()
  
  
}

function draw() {
  background(0,0,0);  
  drawSprites();
  text(mouseX + ',' + mouseY,mouseX,mouseY);
  text("Lifes:"+lifes,100,10);
  
  //reset();
  neko.collide(ground);
  neko.bounce(ground2);
  //var index = 0;
 // var x = 600;
  //var y;

  //neko[index-1].x = x;
  //neko[index-1].y = y;
  
  //camera.position.x = neko[index-1].x;
  //camera.position.y = displayWidth/2;
  
  if(keyDown("W")&& neko.y >= 270) {
    neko.velocityY = -12;
  
  }
  neko.velocityY = neko.velocityY+0.8;
 
  if(keyDown("D")){
    neko.x = neko.x+4;
  }

  if(keyDown("A")){
    neko.x = neko.x-4;
  }

 if(neko.x>840 && neko.isTouching(dot)){ 
   
  kniveS.play();
   
   knive.velocityY = +20;
   knive2.velocityY = +20;
   knive3.velocityY = +20;
   dot.destroy();
  }
  
  

  if(knive.y>295 && knive.isTouching(dot2)){
    
    kniveH.play();
    knive.velocityY= 0;
    //dot2.destroy();
  }
  
  if(knive2.y>300 && knive.isTouching(dot2)){
    
    kniveH.play();
    knive2.velocityY= 0;
    dot2.destroy();
  }
  
  if(knive3.y>300){
    knive3.velocityY= 0;
  }

  if(knive.isTouching(neko)){
    lifes = lifes -1;
  }

  if(knive2.isTouching(neko)){
    lifes = lifes -1;
  }

  if(knive3.isTouching(neko)){
    lifes = lifes -1;
  }

  if(lifes === 2){
   neko.reset();
  }
  if(lifes === 1){
    neko.reset();
  }





}
function reset(){
  neko.x = 600;
  neko.y = 262;
}


