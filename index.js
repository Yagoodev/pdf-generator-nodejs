const express = require("express");
const cors = require("cors");
const api = require("./db");
const app = express();

const corsOptions ={
  origin:'https://frontend-pdf.vercel.app/',
  credentials:true,
  optionSuccessStatus:200
}

app.use(express.json());
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  return res.json(JSON.stringify(api));
});

app.listen(3001);