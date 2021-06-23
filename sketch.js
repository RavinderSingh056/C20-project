var bullet,wall;
var deformation;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 
  bullet = createSprite(200,200,100,50);
  bullet.velocityX = random(55,90);
  bullet.shapeColor = "white";
  
  wall = createSprite(1300,200,60,height/2);
  wall.shapeColor = color(80,80,80);

  speed = bullet.velocityX;
  weight = random(400,1500);
  deformation = 0.5*weight*speed*speed/22500;
  }

function draw() {
  background(30,40,30);
    if (bullet.x - wall.x < wall.width/2 + bullet.width/2
      && wall.x - bullet.x < wall.width/2 + bullet.width/2
      && bullet.y - wall.y < wall.height/2 + bullet.height/2
      && wall.y - bullet.y < wall.height/2 + bullet.height/2 && deformation <= 100) {
      bullet.shapeColor = "green";
      bullet.velocityX = 0;
      text("Grade: A+",1200,370,textFont("georgia"),textSize(20));
  }
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
      && wall.x - bullet.x < wall.width/2 + bullet.width/2
      && bullet.y - wall.y < wall.height/2 + bullet.height/2
      && wall.y - bullet.y < wall.height/2 + bullet.height/2 && deformation > 100 && deformation < 180) {
      bullet.shapeColor = "yellow";
      bullet.velocityX = 0;
      text("Grade: B+",1200,370,textFont("algerian"),textSize(20));
}
if (bullet.x - wall.x < wall.width/2 + bullet.width/2
      && wall.x - bullet.x < wall.width/2 + bullet.width/2
      && bullet.y - wall.y < wall.height/2 + bullet.height/2
      && wall.y - bullet.y < wall.height/2 + bullet.height/2 && deformation >= 180) {
        bullet.shapeColor = "red";
        bullet.velocityX = 0;
        text("Grade: C+",1200,370,textFont("chiller"),textSize(30));
  }
  console.log(deformation);

  drawSprites(); 
}