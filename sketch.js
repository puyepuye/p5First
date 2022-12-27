// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/q2IDNkUws-A

var mic;

function setup() {
  createCanvas(200, 200);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  ellipse(100, 100, 200, vol * 200);
}

var vol = mic.getLevel();
console.log(vol);
/*
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
*/