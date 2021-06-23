import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes/mernRoutes";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`Node and express server running on port ${PORT}`);
});
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);
//crud
mongoose.set("debug", true);
mongoose
  .connect("mongodb://localhost/booksmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected!!!");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("we're connected !");
// });
