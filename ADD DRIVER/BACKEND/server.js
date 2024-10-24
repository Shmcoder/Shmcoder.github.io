// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/Router");

const app = express();
const port = 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:1234",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
// const upload = multer();
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
