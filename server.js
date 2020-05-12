const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "caesarcipher/build")));

app.use(cors());
const port = process.env.PORT || 3001;
const rootUrl = "https://api.opendota.com/api/";

app.get("/api/teams", async (req, res) => {
  let result = await axios.get(`${rootUrl}/teams`);
  console.log(result);
  console.log(result.data);
  res.send(result.data);
});

app.get("/api/heroes", async (req, res) => {
  let result = await axios.get(`${rootUrl}/heroes`);
  console.log(result);
  console.log(result.data);
  res.send(result.data);
});

// Anything that doesn't match the above, send back the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "caesarcipher/build/index.html"));
});

app.listen(port);

module.exports = app;
