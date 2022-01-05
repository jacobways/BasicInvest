dotenv = require("dotenv").config();

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const chartDataRouter = require("./routes/chartData")
const userRouter = require("./routes/user")
const trendRouter = require("./routes/trend")

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);

app.use('/', chartDataRouter)
app.use('/', userRouter)
app.use('/trend', trendRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
