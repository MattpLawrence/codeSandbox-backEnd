const router = require("express").Router();
const { Url } = require("../models");

//get all url data
// try/catch used in case of bad call
router.get("/", async (req, res) => {
  const urlData = await Url.findAll();
  try {
    return res.json(urlData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post new url to shorten
router.post("/", async (req, res) => {
  console.log(req.body);
  const urlData = await Url.create(req.body);

  try {
    return res.json(urlData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
