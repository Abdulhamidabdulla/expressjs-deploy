import express from "express";
import serverless from "serverless-http";

const app = express();
const port = 8000

app.get("/", (req, res) => {
  res.send("Server sizni tinglamoqda...");
});

app.get("/about", (req, res) => {
  res.json({
    name: "Abdulhamid",
    surname: "Abdullayev",
    age: 15,
  });
});

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`);
})