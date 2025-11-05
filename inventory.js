function createTool(name, id, price, stock) {
  return {
    name,
    id,
    price,
    stock,
    describe: function() {
      console.log(`=> Name: ${this.name}`)
      console.log(`=> ID: ${this.id}`)
      console.log(`=> Price: $${this.price}`)
      console.log(`=> Stock: ${this.stock}`)
    },
    setPrice: function(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        alert('Invalid price!');
      }
    },
  }
}

let scissors = createTool('Scissors', 0, 10, 8);
let drill = createTool('Cordless Drill', 1, 45, 15);
let hammer = createTool('Sledgehammer', 2, 25, 10)
drill.describe()
scissors.describe()
hammer.describe()
