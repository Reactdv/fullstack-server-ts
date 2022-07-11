import express from "express"
import mongoose from "mongoose"

import { TodoModel } from "../models/Todo.js"

export const createTodos = async(req,res)=>{
 const {
   task,
   deadline
 } = req.body
 
 const newTodoModel = new TodoModel({
   task,
   deadline
 })
 
 try{
   await newTodoModel.save()
   res.status(201).json(newTodoModel)
   console.log(newTodoModel)
 }
 catch(e){
   console.log(e)
 }
 
}

export const getTodos = async(req,res)=>{
  try{
   const  todoList = await TodoModel.find()
   res.status(200).json(todoList)
  }
  catch(e){
    console.log(e)
  }
}

export const deleteTodos = async(req,res)=>{
  const { id } = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).json(`No todos with the id of :${id}`)
  await TodoModel.findByIdAndRemove(id)
  res.json(`todo with the id of ${id} is deleted successfuly`)
}

export const updateTodos = async(req,res)=>{
  const { id } = req.params
  const { task,deadline } = req.body
  
  if(!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).json(`todo not found id:${id}`)
  
  const updatedTodos = {
    task,
    deadline
  }
   
   await TodoModel.findByIdAndUpdate(
     id,
     updatedTodos,{new:true}
     )
     res.json(updatedTodos)
  
}

