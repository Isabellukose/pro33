var snow;
const Engine=Matter.Engine;
const World=Matter.World;
 const Bodies=Matter.Bodies;
var engine,world,bg
var maxSnow=100
var snow=[]
var rand




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
   world=engine.world;
}
function preload(){
bg=loadImage("snow2.jpg")




}

function draw() {
  Engine.update(engine)
  background(bg);
  rand=Math.round(random(1,4)) 
  if(frameCount%5===0){
     snow.push(new Snow(random(0,800),30,30))
     }
      for(var j=0;j<snow.length;j++){
         snow[j].display()
         }
  drawSprites();
  
}