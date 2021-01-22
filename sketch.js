var dog,dogImag,dogImg1
var food,foodStock

function preload()
{
  dogImag=loadImage("image/dogImg.png");
  dogImg1=loadImage("image/dogImg1.png");

}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  foodStock = databaseref("food");
  foodStock.on ("value",readFood);
  food.scale.set(20);

  dog = createSprite(250,360,10,50);
  dog.addImage(dogImag);
  dog.scale = 0.2;
}


function draw() {  
background("green");
if(foodStock===undifined){
  textSize(20);
  text("Press UP ARROW to feed dog",50,50);
  text("Food Remining"+foodStock,150,150);
}
if(keyWentUp(up_Arrow)){
  writeStock(foodStock);
  dog.addImage(dogImg1);
}
if(keyWentDown(up_Arrow)){
  writeStock(foodStock);
  dog.addImage(dogImg);
}
if(foodStock === 0){
  foodStock = 20;
}
  drawSprites();
  

}
function writeStock(x){
  if (x<=0);
  x = 0;

else{
  x=x=1;
}
database.ref("/").update({
  foodStock:x
});
}
function readStock(data){
  foodStock = data.val();
}