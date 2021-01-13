class Boy{
    constructor(x,y,width,height){
        var options = {
            density : 1,
            isStatic : true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width,this.height, options);
        World.add(world,this.body)
    }

    display(){
        var angle = this.body.angle;
         var pos = this.body.position
         rotate(angle);
         imageMode(CENTER);
         image(this.image,pos.x,pos.y,this.width,this.height);
    }
}