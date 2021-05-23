class Box{
    constructor(x, y, width, height){
        var options = {
            isStatic:false,
            restitution: 1.5,
            density: 1
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width=width;
        this.height=height;
        this.color=[random(100, 255), random(100, 255), random(100, 255)]
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;   
        stroke(this.color)
        strokeWeight(5)
        noFill()
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height)
    }
}