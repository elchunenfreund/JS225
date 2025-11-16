class Animal {}
class Cat extends Animal {}

let cat = new Cat();
let catProto = Object.getPrototypeOf(cat);
console.log(catProto === Cat.prototype);   // true

let myProto = {
  meow() {
    console.log("Meow!")
  }
}

Object.setPrototypeOf(cat, myProto);
catProto = Object.getPrototypeOf(cat);

cat.meow();
console.log(catProto === cat.prototype)
console.log(catProto === myProto)