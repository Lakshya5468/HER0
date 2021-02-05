class Chain {
  constructor(bodyA,pointB) {
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        lenght:75,
        stiffness:0.004
    }
    
    this.chain=Constraint.create(options);

    World.add(world, this.chain);
  }
  display(){

  }
};