function makeCar(accelerateRate, breakRate){
  return {
    speed: 0,
    accelerateRate,
    breakRate,
    accelerate() {
      this.speed += this.accelerateRate
    },
    break() {
      this.speed -= this.breakRate
      if (this.speed < 0) this.speed = 0 
    }
  }
}
let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.break();
console.log(sedan.speed);
sedan.break()
console.log(sedan.speed)

