class Classy {
  constructor(name) {
    this.name = name;
  }
}

class Subclassy extends Classy {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  describe() {
    console.log(`Hi my name is ${this.name} and im ${this.age} years old`);
  }
}

let me = new Subclassy('Chunie', 25)
me.describe()
