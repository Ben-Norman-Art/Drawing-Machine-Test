let myImage;
let c;


function setup() {
   createCanvas(400, 400);
 background(220);

  strokeWeight(1);

  input = createFileInput(handleFile);
  input.parent('upload-button');

  imgAdd = createButton('Add Image To Canvas');
  imgAdd.parent('imgAdd-button');
  imgAdd.mousePressed(loadImage);
}

//get() returns color here
function draw() {
  if (mouseIsPressed){
  c = myImage.get(mouseX, mouseY);
  fill(c);
  rectMode(CENTER);
  rect(mouseX, mouseY, 10, 10);
  }
}


function preload() {
  myImage = loadImage(addImage);
}