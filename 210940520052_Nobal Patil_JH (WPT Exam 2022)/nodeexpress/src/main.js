const express = require("express");
const app = express();

app.use(express.json());

const { addMsg, getMsgs } = require("./messages");

app.get("/messages", async (req, res) => {
  const list = await getMsgs();
  res.json(list);
});

app.post("/add-msg", async (req, res) => {
  await addMsg(req.body);
  const responseMsg = { successMsg: "Message added successfully!!" };
  res.json(responseMsg);
});

app.listen(5000, () => console.log("Server started..."));
