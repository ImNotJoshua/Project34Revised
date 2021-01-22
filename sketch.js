/*ma'am i submitted this in a bit of a hurry so there might be a few things missing and pls tell me 
if there is anyhting wrong*/

var dog,happyDog,database,foodS,foodStock;

var dogImg,happyDogImg;

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  
  happyDogImg=loadImage("image/dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  dog=createSprite(27,27,27,27);
  dog.addImage("images/dogImg.png");

  happyDog=createSprite(27,27,27,27);
  happyDog.addImage("images/dogImg1.png");
  
}


function draw() {  
  background(46, 139, 87);

  foodStock=database.ref('food');
  foodStack.on("value,readStock")

  if(KeyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })