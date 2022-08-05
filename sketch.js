const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;

function preload() {
//Precargar 
  /*backgroundImg =
  towerImage = */
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

//Crear el cuerpo del suelo
  /*ground = */

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
 
//Crear el cañon y la bala de cañon (clases hijos)

  /*
  cannon =;
  cannonBall =;*/
}

function draw() {
  background(189);
  //Colocar una imagen como fondo

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);

//Crear el cuerpo del suelo
  pop();

  push();
  imageMode(CENTER);

//agregar la imagen de la torre
  pop();

//Mostrar la bala de cañon y el cañon
 
}

//Funcion para lanzar la bala de cañon
function keyReleased() {
  
}
