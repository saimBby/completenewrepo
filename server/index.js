require('dotenv').config()

const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Servrt PORT:", process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })


app.post("/signup", (req, res) => {
  console.log(req.body)
})