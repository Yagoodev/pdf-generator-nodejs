const express = require("express");
const cors = require("cors");
const api = require("./db");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
  res.setHeader('Access-Control-Allow-Credentials', true);

  return res.json(JSON.stringify(api));
});

app.listen(3001);