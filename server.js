const express = require("express");
const bodyParser = require("body-parser");

//require in models and routes in order to generate the tables using sequelize

const routes = require("./controllers");
const sequelize = require("./config/connection");

//from express documentation, set app variable
const app = express();
//bring in body parser to read json body
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
//connect express to routes
app.use(routes);

//set alternate port in case this project will be hosted externally
const PORT = process.env.PORT || 3001;

//sync sequelize before starting server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(` \nServer listening on port: ${PORT}`);
  });
});
