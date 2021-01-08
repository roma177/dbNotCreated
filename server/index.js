const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", ".env.server")
});
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/printvbay", {
  useNewUrlParser: true, useCreateIndex: true
});

const Item = mongoose.model("Item", {
  title: {
    type: String
  },
  artist: {
    type: String
  },
  image: {
    type: String
  },
  year: {
    type: Number
  },
  price: {
    type: Number
  }
});

const item = new Item({
  title: "Test"
});

(async () => {
  try {
    const doc = await item.save();
    console.log("Saved doc.");
  } catch (err) {
    console.log(err);
  }
})();

app.use("/items", require("./routes/items"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
