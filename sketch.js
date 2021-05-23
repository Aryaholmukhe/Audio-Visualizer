const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var song = ""
var s1, s2, s3, s4, bg, ground
var fft
var particles = []
var color;
var boxes = []
var ballsA = []
var box, circle, crd, tfi, beatsong,md
var mConstraint;

function preload(){
   s1 = loadSound("cradle.mp3")
   s2 = loadSound("BillieEilish-ThereforeIAm.mp3")
   s3 = loadSound("beatSong.mp3")
   s4 = loadSound("salemIlese-MadatDisney.mp3")
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight)
    engine = Engine.create();
    world = engine.world;
    angleMode(DEGREES)
    rectMode(CENTER)
    fft = new p5.FFT()

   color = [random(20, 254), random(20, 254), random(20, 254)]

   songOption = new ChooseSong()
   generator = new Generate()
   ground = new Ground(windowWidth/2, windowHeight, windowWidth, 100)
   
   box.class("btn")
   circle.class("btn")
   crd.class("songBtn")
   tfi.class("songBtn")
   beatsong.class("songBtn")
   md.class("songBtn")

   var canvasMouse = Mouse.create(canvas.elt)
   canvasMouse.pixelRatio = 2
var options = {
    mouse: canvasMouse
}
   mConstraint = MouseConstraint.create(engine, options)
   console.log(mConstraint)
   World.add(world, mConstraint)
}

function draw(){
background(10, 12)
text(mouseX+"," + mouseY, 30, 35)

Engine.update(engine);
  
  songOption.display()
generator.display()
ground.display()
for(var l = 0; l<boxes.length; l++){
    boxes[l].display()
}
for(var b = 0; b<ballsA.length; b++){
    ballsA[b].display()
}
if(mConstraint.body){
    var pos = mConstraint.body.position;
    var offset = mConstraint.constraint.pointB
    var m = mConstraint.mouse.position;
    stroke(255)
    line(pos.x+offset.x, pos.y+offset.y, m.x, m.y)
}
translate(width/2, height/2)

fft.analyze()
var amp = fft.getEnergy(20,200)

push()
if(amp>230){
    rotate(random(-1.5, 1.5))
    color = [random(0, 254), random(0, 254), random(0, 254)]
}
pop()

var alpha = map(amp, 0,255, 180, 150)
fill(0, alpha)

noStroke()
rect(0, 0, width, height)



stroke(color)
strokeWeight(2)
noFill()

var wave = fft.waveform()

for(var a = -1; a <= 1; a+=2){

    beginShape()
    for(var i = 0; i<=180; i+=0.5){
        var index = Math.round(map(i, 0, 180, 0, wave.length-1))
       
        var r = map(wave[index], -1, 1, 150, 350)
        var x = r * sin(i)*a
        var y = r * cos(i)
        vertex(x, y)
    }
    endShape()

}

  var p = new Particle()
  particles.push(p)

  for(var i = particles.length-1; i>=0; i--){
      if(!particles[i].edges()){
        particles[i].update(amp > 230)
        particles[i].display()
    }else{
        particles.splice(i, 1)
    }
  }


}