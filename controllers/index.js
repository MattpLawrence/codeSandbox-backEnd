//this page is included for scalability and as entrance point
const router = require("express").Router();

// set up router to be accessible when called in server.js
const urlRoutes = require("./urlRoute");

router.use("/", urlRoutes);

module.exports = router;
