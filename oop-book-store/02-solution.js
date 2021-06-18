class Bookstore{
  constructor(name){
    this.name = name;
    this.books = [];
  }
  
  storeBook(book){
    this.books.push(book);
  }
  
  getBook(title){
    const bookPicked = this.books.find(book => book.title === title);
    
    if (!bookPicked) return false;
    return bookPicked;
  }
  
  getAllBooks(){
    return this.books;
  }
}

class Book {
  constructor(title, quantity){
    this.title = title;
    this.quantity = quantity;
  }
  
  changeTitle(newTitle){
    this.title = newTitle;
  }
}

module.exports = { Bookstore, Book };