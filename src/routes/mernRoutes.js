import { addNewBook } from "../controllers/mernController";

const routes = (app) => {
  app
    .route("/books")
    .get((req, res) => {
      res.send("GET request successful!");
    })
    .post(addNewBook);

  app
    .route("/books/:bookID")
    .put((req, res) => {
      res.send("PUT request successful!");
    })
    .delete((req, res) => {
      res.send("DELETE request successful");
    });
};

export default routes;
