const express = require("express");
const app = express();
const port = 3000;

app.get('/tin-tuc', (req, res) => {
    return res.send("hello world!!!");
})

app.listen(port, () =>
  console.log(`example app listening at http://localhost:${port}`)
);
 