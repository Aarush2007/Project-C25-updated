//creating a dustbin class
class Dustbin {
    constructor(x,y,width,height){
        //adding some extra parameters
        var options = {
            isStatic: true
        }
        //creating the main dustbin
        this.body = Bodies.rectangle(x,y,width,height,options);
        //adding the dustbin to the world
        World.add(world,this.body);
        //declaring an image variable that holds the image for the dustbin
        this.image = loadImage("dustbin.png");

        //assigning the values of the parameters width and height to this.width and this.height
        this.width = width;
        this.height = height;
    }

    //display function for the middle rect of the dustbin
    display1(){
        var pos = this.body.position;
        fill("white");
        stroke("white");
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,pos.x-105,pos.y-212,210,200);
    }

    //display function for the other 2 rects of the dustbin
    display(){
        var pos = this.body.position;
        fill("white");
        stroke("white");
        rect(pos.x,pos.y,this.width,this.height);  
    }
}