//creating the ground class
class Ground {
    constructor(){
        var options =
        //adding some extra parameters
        {
            isStatic: true
        }

        //making the main Ground
        this.body = Bodies.rectangle(width/2, height-45, width, 35,options);
        //adding the ground to the main world
        World.add(world,this.body);

    }
    //making the display function
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,width,20);
    }
}