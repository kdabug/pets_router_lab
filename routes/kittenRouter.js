const { Router } = require("express");
const kittenRouter = Router();
const { Kitten } = require("../models");

kittenRouter.get("/", async (req, res) => {
  try {
    const allKittens = await Kitten.findAll();
    console.log("ALL KITTENS: ", Kitten);
    const kittens = allKittens.map(kitten => kitten.dataValues);
    res.json({ kittens: kittens });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

kittenRouter.post("/post", async (req, res) => {
  try {
    const { body } = req;
    const kitten = await Kitten.create(body);
    res.json({ kitten: kitten.dataValues });
  } catch (e) {
    console.log(e);
  }
});

kittenRouter.get("/:id", async (req, res) => {
  try {
    const oneKit = await Kitten.findByPk(req.params.id);
    res.json({ kitten: oneKit });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});
module.exports = kittenRouter;
