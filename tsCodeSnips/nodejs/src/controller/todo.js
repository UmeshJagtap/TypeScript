"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
var todo_1 = require("../models/todo");
// const TODO = [{ id: 't1', text: 'Learn TypeScript' }];
var TODO = [];
var createTodo = function (req, res, err) {
    //   const text = (req.body as { text: string }).text;  // type assertion way
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODO.push(newTodo);
    res.status(201).json({ message: 'Todo created', newTodo: newTodo });
};
exports.createTodo = createTodo;
