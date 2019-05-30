let express = require("express");
let consign = require("consign");
let bodyParser = require("body-parser");

module.exports = function() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  consign()
    //inclua
    .include("controllers")
    //inclua depois
    .then("persistencia")
    .into(app);
  return app;
};
