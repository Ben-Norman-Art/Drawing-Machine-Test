let input;
let img;
let canvas;
let imgAdd;
let imgSave;
let imgReset;
let reX;
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
  rect(mouseX, mouseY, 25, 25);
  }
}


function preload() {
  myImage = loadImage(Image);
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}


//Function for drawing the image onto the canvas.
function addImage() {
  reX = (img.width) / (img.height);
  resizeCanvas(reX*500, 500);
  if (img) {
    image(img, 0, 0, width, height);
  }
}
function keyTyped(){

  //console.log(`Key s is being Typed`)

  if (key == 's'){
  saveCanvas(`fileName`, `png`);
  }
  if (key == 'c'){
  clear();
  background(220);
}



  return false;
}
