import express from "express";
import serverless from "serverless-http";

const app = express();

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

export const handler = serverless(app);