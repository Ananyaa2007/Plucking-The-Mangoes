class Stone{
    constructor(x,y,r){
        var options={
            isStatic: false,
            density: 1.2,
            friction:1,
            restitution: 0
        }
        this.body= Bodies.circle(x,y,r,options);
        this.r= r;
        this.image= loadImage("stone.png");

        World.add(world,this.body);
    }
    display(){
        var p= this.body.position;
        var angle=this.body.angle;
        push();
        imageMode(CENTER);
        translate(p.x,p.y);
        rotate(angle);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}