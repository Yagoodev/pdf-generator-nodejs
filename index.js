const express = require("express");
const api = require("./db");
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "frontend-pdf.vercel.app");

  return res.json(JSON.stringify(api));
});

app.listen(3001);