import {
  addNewBook,
  getBooks,
  getCovers,
  getBookWithID,
  updateBook,
  deleteBook,
} from "../controllers/mernController";

const routes = (app) => {
  app.route("/books").get(getBooks).post(addNewBook);
  app.route("/books/covers").get(getCovers);

  app
    .route("/books/:bookID")
    .get(getBookWithID)
    .put(updateBook)
    .delete(deleteBook);
};

export default routes;
