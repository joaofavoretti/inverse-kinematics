class Segment {
  constructor(head, len, angle) {
    this.child = null;
    this.head = head;
    this.len = len;
    this.angle = angle;
  }
  
  static fromParent(parent, len, angle) {
    parent.child = new Segment(parent.tail, len, angle);
    return parent.child;
  }
  
  show() {
    stroke(255);
    strokeWeight(4);
    line(this.head.x, this.head.y, this.tail.x, this.tail.y);
  }
  
  follow(newHead) {
    const newAngle = newHead.copy().sub(this.tail).heading();
    this.head = newHead;
    this.angle = newAngle;
    
    if (this.child)
      this.child.follow(this.tail);
  }
  
  get tail() {
    const dx = this.len * cos(this.angle);
    const dy = this.len * sin(this.angle);
    return createVector(this.head.x - dx, this.head.y - dy);
  }
}
