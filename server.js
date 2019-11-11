const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;
const rootUrl = "https://koodihaaste-api.solidabis.com/bullshit";

let config = {
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidWxsc2hpdCI6ImJ1bGxzaGl0IiwiaWF0IjoxNTczMzk4MjcwfQ.SGM2omQlNExcGRiAjo1WiPL0XeDC_Ufu8U4I8oKR9Sk"
  }
};

app.get("/bullshits", async (req, res) => {
  let result = await axios.get(rootUrl, config);
  console.log(result);
  console.log(result.data);
  res.send(result.data);
});

app.listen(port);

module.exports = app;
