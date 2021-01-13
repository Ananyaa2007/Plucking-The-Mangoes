class Mango{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution:0,
            friction: 1
        }
        this.mango=Bodies.circle(x,y,r,options);
        this.r= r;
        this.width= width;
        this.height= height;
        this.image= loadImage("mango.png");

        World.add(world,this.mango);
    }
    display(){
        var p= this.mango.position;
        push();
        imageMode(CENTER);
        image(this.image,p.x,p.y,this.r,this.r);
        pop();
    }
}