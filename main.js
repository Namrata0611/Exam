const { response } = require("express");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { selectUser, addUser } = require("./user.js");

app.get("/users", async (req, res) => {
  const list = await selectUser();
  //   response.json({ message: "get req" });
  res.json(list);
});
app.post("/add-user", async (req, res) => {
  const user = req.body;

  await addUser(user);
  res.json({ message: "added" });
});

app.listen(5000, () => {
  console.log("server started");
});
