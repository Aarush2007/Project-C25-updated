//making the paper class
class Paper {
    constructor(){
        //adding some extra parameters
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        //creating the main paper
        this.body = Bodies.circle(150,600,30,options);
        //assigning a thi.image variable that holds the image for the paper
        this.image = loadImage("paper.png");
        //adding the paper to the main world
        World.add(world,this.body);

    }
    //creating the display function
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(pos.x,pos.y,30,30);
        image(this.image,pos.x-38,pos.y-40,75,75);
    }
}