const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,ground,hero,fly;

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,50,50);
    box2 = new Box(400,300,50,50);
    box3 = new Box(400,300,50,50);
    box4 = new Box(400,300,50,50);
    box5 = new Box(400,200,50,50);
    box6 = new Box(400,400,50,50);
    box7 = new Box(400,400,50,50);
    box8 = new Box(400,400,50,50);
    box9 = new Box(400,400,50,50);
    box10 = new Box(400,300,50,50);
    box11 = new Box(400,500,50,50);
    box12 = new Box(400,500,50,50);
    box13 = new Box(400,500,50,50);
    box14 = new Box(400,500,50,50);
    box15 = new Box(400,400,50,50);
    box16 = new Box(400,600,50,50);
    box17 = new Box(400,600,50,50);
    box18 = new Box(400,600,50,50);
    box19 = new Box(400,600,50,50);
    box20 = new Box(400,500,50,50);
    ground=new Ground(width/2,height-10,width,20);
    hero=new Hero(200,200,200);
    chain=new Chain(hero.body,{x:400,y:0});
}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ground.display();
    hero.display();
    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    
}