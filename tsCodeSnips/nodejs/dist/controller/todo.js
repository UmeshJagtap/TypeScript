"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
// const TODO = [{ id: 't1', text: 'Learn TypeScript' }];
const TODO = [];
const createTodo = (req, res, err) => {
    //   const text = (req.body as { text: string }).text;  // type assertion way
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODO.push(newTodo);
    res.status(201).json({ message: 'Todo created', newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res, err) => {
    res.status(200).json({ TODO });
    // res.status(200).json({ todos: TODO });
};
exports.getTodo = getTodo;
//# sourceMappingURL=todo.js.map