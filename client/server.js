const express = require('express')
const path = require("path");
const app = express()
const port = 3000

app.use("/src", express.static(path.resolve(__dirname, "client", "src")))

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
