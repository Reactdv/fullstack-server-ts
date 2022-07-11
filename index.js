import cors from "cors"
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"

import  todosRoutes  from "./routes/Todo.js"


const app = express()
dotenv.config()
app.use(cors())
app.use(express.json({
  limit:"600mb",
  extended:true
}))
app.use(bodyParser.json({
  limit:"600mb",
  extended:true
}))
app.use(bodyParser.urlencoded({
  limit:"600mb",
  extended:true
}))

const PORT = process.env | 5003

const CONNECTION_URL = "mongodb+srv://jerlly:123@cluster0.dn1rjhv.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true

})
app.listen(PORT,()=>console.log("running"))

app.use("/todos",todosRoutes)