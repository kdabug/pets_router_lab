const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const kittenRouter = require("./routes/kittenRouter");
const doggoRouter = require("./routes/doggoRouter");

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use("/kittens", kittenRouter);
app.use("/doggos", doggoRouter);

app.get("/", (req, res) => {
  res.send("welcome to the petz app");
});

app.listen(3000, () => console.log("up and running"));
