const URLs = require("./CONFIG/Proxy_url");
const express = require("express");
const cors = require("cors");
const routes = require("./ROUTES/Router");

class Server {
  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.setRoutes();
  }

  configureMiddleware() {
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true, limit: "10mb" }));

    // CORS configuration
    this.app.use(
      cors({
        origin: URLs.ORIGIN_URL,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
      })
    );
  }

  setRoutes() {
    // Use routes
    this.app.use("/api", routes);
  }

  start() {
    this.app.listen(URLs.PORT, () => {
      console.log(`Server is running on ${URLs.SERVER}`);
    });
  }
}

// Instantiate and start the server
const server = new Server();
server.start();
