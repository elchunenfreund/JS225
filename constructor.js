let shape = {
  getType: function() {
    return this.type
  }
}

function Triangle(a, b, c) {
  this.type = 'triangle'
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 12
t.getType();                   // "triangle"
