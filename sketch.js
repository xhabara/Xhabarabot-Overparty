
let mySound1;
let mySound2;
let mySound3;

let ellipses = [];
let paused = false;
let firstMouseClick = false;


window.addEventListener("keydown", function (e) {
  if (e.key === "s") {
    saveSketch();
  }
});

function preload() {

  mySound1 = loadSound("RullyShabaraSampleR01.wav");
  mySound2 = loadSound("RullyShabaraSampleL14.mp3");
  mySound3 = loadSound("RullyShabaraSampleL15.mp3");
}

function saveSketch() {
  saveCanvas("mySketch", "png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(22);

  button = createButton("Start");
  button.position(width/40, height/40);
  button.mousePressed(toggleSketch);

  mySound1.setVolume(1);
  mySound2.setVolume(1);
  mySound3.setVolume(1);
}

function toggleSketch() {
  if (paused) {
    button.html("Stop");
    paused = false;
    mySound1.loop();
    mySound2.loop();
    mySound3.loop();
  } else {
    button.html("Start");
    paused = true;
    mySound1.stop();
    mySound2.stop();
    mySound3.stop();
    background(22);
  }
}

function draw() {

  if (!paused) {
  
    let randomSound = Math.floor(Math.random() * 3) + 1;


    let randomColor = color(random(455), random(455), random(455));
    let randomShape = Math.floor(Math.random() * 2) + 1;

    if (randomSound === 1) {

      mySound1.rate(map(mouseX, 0, width, 0.5, 12));

  
      if (mouseIsPressed === true) {
        mySound1.setVolume(50);
      } else {
    
        mySound1.setVolume(10);
      }
    } else if (randomSound === 2) {

      mySound2.rate(map(mouseX, 0, width, 1, 10));

      if (mouseIsPressed === true) {
        mySound2.setVolume(50);
      } else {
   
        mySound2.setVolume(40);
      }
    } else {
 
      mySound3.rate(map(mouseX, 1, width, 2, 2));

      
      if (mouseIsPressed === true) {
        mySound3.setVolume(50);
      } else {
    
        mySound3.setVolume(5);
      }
    }

    stroke(200); 
    strokeWeight(3);

    if (randomShape === 1) {
      let speed = dist(mouseX, mouseY, pmouseX, pmouseY) * frameRate();
      let size = map(speed, 0, 10, 50, 0);
      fill(randomColor);
      ellipse(mouseX, mouseY, size, size);
    } else if (randomShape === 2) {
      fill(randomColor);
      rect(mouseX, mouseY, 5, 5);
    } else {
    }
  }
}
