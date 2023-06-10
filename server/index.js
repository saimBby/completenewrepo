require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const User = require('./models/userModel')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

  app.post("/signup", async (req, res) => {
    const {email, password} = req.body

    try {
      const user = await User.signup(email, password)
  
    
      res.status(200).json({email})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })
  