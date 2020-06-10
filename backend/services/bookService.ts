import BookRepository from "../repositories/bookRepository.ts";
import Book from "../model/bookModel.ts";

class BookService {
  getAllBooks = async () => {
    const result = await BookRepository.all();
    const books = new Array<Book>();

    result.rows.map((book) => {
      var temp: any = {};
      result.rowDescription.columns.map((item, index) => {
        temp[item.name] = book[index];
      });
      books.push(temp);
    });
    return books;
  };

  getBookById = async (id: number) => {
    const result = await BookRepository.find(id);

    var book: any = {};
    result.rows.map((items) => {
      result.rowDescription.columns.map((item, index) => {
        book[item.name] = items[index];
      });
    });

    return book;
  };

  createBook = async (book: Book) => {
    return await BookRepository.create(book);
  };

  updateBook = async (id: number, book: Book) => {
    return await BookRepository.update(id, book);
  };

  deleteBook = async (id: number) => {
    try{
        return await BookRepository.delete(id);
      }catch(error){
        console.log(error.message);
        
      }
  };
}

export default new BookService();
