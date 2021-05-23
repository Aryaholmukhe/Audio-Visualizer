class Generate{
    constructor(){
        box = this.rects = createButton("Create Boxes")
        circle = this.balls = createButton("Create Circles")
    }
    display(){
        this.rects.position(width/1.4, 100)
        this.balls.position(width/1.4, 200)
        // this.rects.style("background-color", "red")
        // this.rects.style('font-size', '18px')


        this.rects.mousePressed(()=>{
            boxes.push(new Box(random(20, windowWidth-20), 0, random(60, 150), random(60, 150)))
            console.log(boxes)
        })

        this.balls.mousePressed(()=>{
            ballsA.push(new Ball(random(20, windowWidth-20), 0, random(10, 50)))
            console.log(ballsA)
        })
    }
}