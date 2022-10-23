const express = require("express");
const mongoose = require("mongoose");
var sid = "ACbe9e22c3499c69ea8ffe3fe182fa07fe";
var auth_token = "5bde7a7e8591d51eab47fe22674497de";
const twilio = require("twilio")(sid, auth_token);
const cors = require("cors");

const usernameModel = require("./models/userName.js");
const useremailModel = require("./models/userEmail");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.dktljlb.mongodb.net/Restaurant-Manager?retryWrites=true&w=majority"
);

app.get("/getName", (req, res) => {
  usernameModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getEmail", (req, res) => {
  useremailModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createName", async (req, res) => {
  const userSetName = req.body;
  const newUserName = new usernameModel(userSetName);
  await newUserName.save();

  res.json(newUserName);
});

app.post("/sendMessage", async (req, res) => {
  const message = req.body;
  twilio.messages.create({
    from: '+12059418300',
    to: '+919324568572',
    body: "\n" + "\nTotal : " + "₹" + JSON.stringify(message.total) + "\n" + "\nItems : " + JSON.stringify(message.arrayTitle) + "\n" + "\nQuantity : " + JSON.stringify(message.arrayQuantity)
  })
  .then((res) =>{console.log("message has been sent!")})
  .catch((err) => {console.log(err)})
  res.json(message);
});

app.post("/createEmail", async (req, res) => {
  const userSetEmail = req.body;
  const newUserEmail = new useremailModel(userSetEmail);
  await newUserEmail.save();

  res.json(newUserEmail);
});

app.listen(3001, () => {
  console.log("SERVER RUNS ON PORT 3001.");
});
