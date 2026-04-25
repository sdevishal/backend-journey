import express from "express";
import path from "path";

const app = express();
const port = 3000;
const absPath = path.resolve("view");

app.get("/", (req, res) => {
  res.sendFile(absPath + "/home.html");
});

app.post("/submit", (req, res) => {
  let body = "";
  req.on("data", (chunks) => {
    body += chunks.toString();
  });

  req.on("end", () => {
    console.log(body);
    res.end(body);
  });
});

app.get("/about", (req, res) => {
  res.sendFile(absPath + "/about.html");
});

app.listen(port, () => {
  console.log(`server started`);
});
