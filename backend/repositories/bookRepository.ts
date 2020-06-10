import { client } from "../configs/database.ts";
import Book from "../model/bookModel.ts";

class BookRepository {
  async all() {
    return client.query("SELECT * FROM books");
  }

  async find(id: number) {
    return client.query(
      {
        text: "SELECT * FROM books WHERE id=$1",
        args: [id],
      },
    );
  }

  async create(book: Book) {
    return client.query(
      {
        text: "INSERT INTO books (title,author,price) VALUES ($1,$2,$3)",
        args: [
          book.title,
          book.author,
          book.price,
        ],
      },
    );
  }

  async update(id: number, book: Book) {
    return client.query(
      {
        text: "UPDATE books SET title=$1, author=$2, price=$3 WHERE id=$4",
        args: [
          book.title,
          book.author,
          book.price,
          id,
        ],
      },
    );
  }

  async delete(id: number) {
    return client.query(
      {
        text: "DELETE FROM books WHERE id=$1",
        args: [id],
      },
    );
  }
}

export default new BookRepository();
