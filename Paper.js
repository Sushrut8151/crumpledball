class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
            
            
        }
        this.r = radius;
        this.x = x;
        this.y = y;
        this.image=loadImage("paper.png")
        this.body = Bodies.circle(x,y,radius, options);
        
        World.add(world, this.body);
    }
    display(){
     var paperposition = this.body.position 
     push()
     translate(paperposition.x,paperposition.y)

        imageMode(CENTER);
        
        fill("white");

        //ellipse(this.body.position.x, this.body.position.y, this.radius);
        image(this.image,0,0,this.r,this.r);
        pop()
    }       
}
