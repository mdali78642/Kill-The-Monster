const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero,monster,rope,ground;

// 1st stack.(this stack have 8 blocks);
var box1, box2, box3, box4, box5, box6, box7, box8;
// 2nd stack.(this stack have 7 blocks);
var box9, box10, box11, box12, box13, box14, box15;
// 3rd stack.(this stack have 6 blocks);
var box16, box17, box18, box19, box20, box21;
// 4th stack.(this stack have 5 blocks);
var box22, box23, box24, box25, box26;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

 // Creating 1st stack;
  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(600, 100, 70, 70);
 // creating 2nd stack;
  box9 = new Box(700, 100, 70, 70);
  box10 = new Box(700, 100, 70, 70);
  box11 = new Box(700, 100, 70, 70);
  box12 = new Box(700, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
 // creating 3rd stack.
  box16 = new Box(800, 100, 70, 70);
  box17 = new Box(800, 100, 70, 70);
  box18 = new Box(800, 100, 70, 70);
  box19 = new Box(800, 100, 70, 70);
  box20 = new Box(800, 100, 70, 70);
  box21 = new Box(800, 100, 70, 70);
 // creating 4th stack.
  box22 = new Box(900, 100, 70, 70);
  box23 = new Box(900, 100, 70, 70);
  box24 = new Box(900, 100 ,70, 70);
  box25 = new Box(900, 100, 70, 70);
  box26 = new Box(900, 100, 70, 70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
 // Displaying our 1st stack.
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
 // Displaying our 2nd stack.
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
 // Displaying our 3rd stack.
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 // Displaying our 4th stack.
 box22.display();
 box23.display();
 box24.display();
 box25.display();
 box26.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged()
{
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}