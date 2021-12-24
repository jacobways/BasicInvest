const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");
const chartDataRouter = require("./routes/chartData")
const userRouter = require("./routes/user")

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);

app.use('/', chartDataRouter)
app.use('/', userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
