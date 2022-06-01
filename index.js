const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://Bishal:Bishal77730@cluster0.xmmzy.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function(){
    console.log("Database Connected successfully");
});

app.use('/user', require('./Backend/Routes/User_Route'));

app.listen(3001, () => {
    console.log(`server is running on 3001`);
});