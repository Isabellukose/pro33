class snow {
    constructor(x,y,radius){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'desity':1.0
        }
        this.img=loadImage("snow5.webp")
        this.body=bodies.circle(x,y,radius,options)
        this.radius=radius

        world.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        Push ();
        translate (pos.x,pos.y);
        rotate (angle);
        ImageMode (center);
        fill ("green");
        Image(this.img,0,0,this.radius,this.radius);
        pop ();
    }
    
};