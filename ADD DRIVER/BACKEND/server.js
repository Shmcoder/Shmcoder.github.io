const URLs = require("./CONFIG/Proxy_url");
const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const routes = require("./ROUTES/Router");

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// CORS configuration
app.use(
  cors({
    origin: URLs.ORIGIN_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Use routes
app.use("/api", routes);

// Start the server
app.listen(URLs.PORT, () => {
  console.log(`Server is running on ${URLs.SERVER}`);
});
