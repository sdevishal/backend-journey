import express from "express";
import path from "path";

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.render("submitted", req.body);
});

app.listen(port, () => {
  console.log(`server started`);
});
