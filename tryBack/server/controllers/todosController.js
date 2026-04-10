const TodosModel = require("../models/todosModel");

class TodosController {
  async getTodos(req, res) {
    try {
      const todos = await TodosModel.find({}, "title");
      return res.status(200).json({ todos });
    } catch (e) {
      return res
        .status(400)
        .json({ message: "Произошла ошибка при получении" });
    }
  }

  async addTodo(req, res) {
    try {
      const title = req.body?.title?.trim();

      if (!title) {
        return res
          .status(400)
          .json({ message: "Пожалуйста, добавьте заголовок" });
      }

      const todoModel = new TodosModel({ title });

      await todoModel.save();

      return res.status(200).json({ message: "Элемент успешно добавлен" });
    } catch (e) {
      return res.status(400).json({
        message: "Произошла ошибка при добавлении",
        error: e.message,
      });
    }
  }

  async editTodo(req, res) {
    try {
      const { _id } = req.body || {};
      const title = req.body?.title?.trim();

      if (!_id) {
        return res.status(400).json({ message: "Не указан id элемента" });
      }

      if (!title) {
        return res
          .status(400)
          .json({ message: "Пожалуйста, добавьте заголовок" });
      }

      const updatedTodo = await TodosModel.findByIdAndUpdate(
        _id,
        { title },
        { new: true, runValidators: true },
      );

      if (!updatedTodo) {
        return res.status(404).json({ message: "Элемент не найден" });
      }

      return res.status(200).json({
        message: "Элемент успешно обновлён",
        todo: updatedTodo,
      });
    } catch (e) {
      return res.status(400).json({
        message: "Произошла ошибка при редактировании",
        error: e.message,
      });
    }
  }

  async deleteTodo(req, res) {
    try {
      const { _id } = req.body || {};

      if (!_id) {
        return res.status(400).json({ message: "Не указан id элемента" });
      }

      const deletedTodo = await TodosModel.findByIdAndDelete(_id);

      if (!deletedTodo) {
        return res.status(404).json({ message: "Элемент не найден" });
      }

      return res.status(200).json({
        message: "Элемент удалён",
        todo: deletedTodo,
      });
    } catch (e) {
      return res.status(400).json({
        message: "Произошла ошибка при удалении",
        error: e.message,
      });
    }
  }
}

module.exports = new TodosController();
