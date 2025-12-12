"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todo_1 = require("../controller/todo");
var router = express_1.default.Router();
router.route('/').post(todo_1.createTodo); // Create a new todo item
router.route('/').get(); // Get all todo items
router.route('/:todoId').patch(); // Update todo item by ID
router.route('/:todoId').delete(); // Delete a todo item by ID
exports.default = router;
