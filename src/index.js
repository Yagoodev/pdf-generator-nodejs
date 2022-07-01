const express = require("express");
const router = require("./router/router.js");
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App running in port: ${PORT}`));