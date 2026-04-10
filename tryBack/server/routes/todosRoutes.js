const { Router } = require("express");
const todosController = require("../controllers/todosController");

const todosRoutes = Router();

todosRoutes.get("/list", todosController.getTodos);
todosRoutes.post("/add", todosController.addTodo);
todosRoutes.patch("/edit", todosController.editTodo);
todosRoutes.delete("/delete", todosController.deleteTodo);

module.exports = todosRoutes;
