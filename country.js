function makeCountry(name, continent, visited=false) {
  return {
    name,
    continent,
    visited,
    visitCountry() {
      this.visited = true
    },
    getDescription() {
      let visitState = this.visited? `I have visited ${this.name}.` : `I haven't visited ${this.name}.`
      return `${this.name} is located in ${this.continent}. ${visitState}`
    },
  }
};

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(canada.getDescription());
canada.visitCountry();
console.log(canada.getDescription());
