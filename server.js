const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mailer = require("./lib/mailer");

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post("/api/contact", (req, res) => {
    const { name = "", noWa = "", message = "" } = req.body;

    mailer({ name, noWa, message })
      .then(() => {
        res.send("Pesan terkirim")
      })
      .catch(() => {
        res.send("Pesan gagal terkirim")
      })
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (error) => {
    if (error) throw error;
    console.log("===== server is ready =====");
  });
});
