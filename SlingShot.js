class SlingShot{
  constructor(bodyA,pointB){
      var options={
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.1,
          length: 10
        
      }
      this.pointB=pointB;
      this.body= Constraint.create(options);
     World.add(world,this.body);
  }
  
  display(){
         
    
      if(this.body.bodyA){
          var pointA= this.body.bodyA.position;
          var pointB= this.pointB;
          push();
          stroke("black");
          strokeWeight(5);
          line(pointA.x,pointA.y,pointB.x,pointB.y);
          pop();
      }
      }
      fly(){
          this.body.bodyA= null;
          }
           attach(body){
               this.body.bodyA= body;
         }
  }