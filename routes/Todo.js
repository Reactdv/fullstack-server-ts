import express from "express"
import {
  
     createTodos,
     getTodos,
     deleteTodos
} from "../controllers/Todo.js"


const router = express.Router()


router.post("/",createTodos)
router.get("/get",getTodos)
router.delete("/get",deleteTodos)

export default router