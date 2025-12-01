function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.describe = function() {
  return `${this.title} was written by ${this.author}`;
};

function Magazine(title, author, issueNumber) {
  Book.call(this, title, author);
  this.issueNumber = issueNumber;
};

Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.constructor = Magazine;

Magazine.prototype.read = function() {
  console.log(`Reading issue ${this.issueNumber} of ${this.title}`);
};

let book = new Book("The Hobbit", "J.R.R. Tolkien");
console.log(book.describe()); // "The Hobbit" was written by J.R.R. Tolkien.

let magazine = new Magazine("National Geographic", "Various", 123);
console.log(magazine.describe()); // "National Geographic" was written by Various.
magazine.read();                // Reading issue #123 of "National Geographic".

console.log(magazine instanceof Book);      // true
console.log(magazine instanceof Magazine);  // true
