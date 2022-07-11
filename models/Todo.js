import mongoose from "mongoose"

export const TodoSchema = mongoose.Schema({
  task:String,
  deadline:Number,
  createdAt:{
    type:Date,
    default:new Date()
  }

})

const TodoModel = mongoose.model("todolist",TodoSchema)

export { TodoModel } 