let cessna152 = {
  fuelCapacity: 4.25,
  cruisingSpeed: 111,

  takeOff() {
    console.log('Taking off')
  },

  land() {
    console.log("landing")
  }
}

function Book(title, author, year) {
  this.title = title,
  this.author = author,
  this.year = year
}

let neuromancer = new Book('Neuromancer',	'William Gibson',	'1984')
let doomsday = new Book('Doomsday',	'Connie Willis','1992')

function Album(title, artist, year) {
  this.title = title,
  this.artist = artist,
  this.year = year
}

let thriller = new Album('Thriller',	'Michael Jackson','1982')
let TheDarkSideOfTheMoon = new Album('The Dark Side of the Moon',	'Pink Floyd',	'1973')

function SmartPhone(brand, model, year) {
  this.brand = brand,
  this.model = model,
  this.year = year,

  this.betteryLevel= function() {
    console.log('The bettery level is at 27 percent')
  },

  this.info = function() {
    console.log(`Thie is a ${this.brand} ${this.model} phone released in ${this.year}`)
  }
}

let iphone = new SmartPhone('Apple', 'iPhone 12', '2020')
let galexy = new SmartPhone('Samsung',	'Galaxy S21',	'2021')

galexy.info()
