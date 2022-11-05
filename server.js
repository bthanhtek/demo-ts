const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const PORT = 5000;

app.use(cors());

app.get("/api/figure", (req, res) => {
  res.sendFile(path.resolve(__dirname, "db.json"));
});

app.get("/api/figure/:id", (req, res) => {
  res.send(req.params.id)
});
 

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
