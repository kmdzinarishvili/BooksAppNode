import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes/mernRoutes";

const app = express();
const PORT = 4000;
app.get("/", (req, res) => {
  res.send(`Node and express server running on port ${PORT}`);
});
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
routes(app);
//crud

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/booksmdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
