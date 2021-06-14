import {
  addNewBook,
  getBooks,
  getBookWithID,
  updateBook,
  deleteBook,
} from "../controllers/mernController";

const routes = (app) => {
  app.route("/books").get(getBooks).post(addNewBook);
  app
    .route("/books/:bookID")
    .get(getBookWithID)
    .put(updateBook)
    .delete(deleteBook);
};

export default routes;
