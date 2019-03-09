const { Router } = require("express");
const doggoRouter = Router();
const { Doggo } = require("../models");

doggoRouter.get("/", async (req, res) => {
  try {
    const allDoggos = await Doggo.findAll();
    const doggos = allDoggos.map(doggo => doggos.dataValues);
    res.json({ doggos: doggos });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

doggoRouter.post("/post", async (req, res) => {
  try {
    const { body } = req;
    const doggo = await Doggo.create(body);
    res.json({ doggo: doggo.dataValues });
  } catch (e) {
    console.log(e);
  }
});

doggoRouter.get("/:id", async (req, res) => {
  try {
    const oneDog = await Doggo.findByPk(req.params.id);
    res.json({ doggo: oneDog });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});
module.exports = doggoRouter;
