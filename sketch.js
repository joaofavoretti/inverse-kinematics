n = 10
size = 100 / n;

function setup() {
  createCanvas(windowWidth, windowHeight / 2);
  
  segments = []
  let seg = new Segment(createVector(mouseX, mouseY), size, 0);
  segments.push(seg);
  for(let i = 1; i < n; i++) {
    seg = Segment.fromParent(segments[i - 1], size, 0);
    segments.push(seg);
  }
}

function draw() {
  background(52);
  segments[0].follow(createVector(mouseX, mouseY));  
  for (let i = 0; i < n; i++) {
    segments[i].show();
  }
}
