var cat1;
var cat1Image;
var mouse1;
var mouse1Image;
var garden
var gardenImage

function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png")
    cat1Image = loadImage("images/cat1.png")
    mouse1Image = loadImage("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   mouse1 = createSprite(300,600,100,100)
   garden = createSprite(1000,800)
   cat1 = createSprite(800,600,100,100)

   mouse1.scale = 0.1
   cat1.scale = 0.1
   garden.scale = 0.01

   cat1

   mouse1.addImage(mouse1Image)
   cat1.addImage(cat1Image)
   garden.addImage(gardenImage)
}

function draw() {

    background(gardenImage);
    mouse1.x = World.mouseX;

    drawSprites();
}