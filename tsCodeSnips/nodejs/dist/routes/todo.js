"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controllers/todo");
const router = express_1.default.Router();
router.route('/').post(todo_1.createTodo); // Create a new todo item
router.route('/todos').get(todo_1.getTodo); // Get all todo items
router.route('/:todoId').patch(todo_1.updateTodo); // Update todo item by ID
router.route('/:todoId').delete(todo_1.deleteTodo); // Delete a todo item by ID
exports.default = router;
//# sourceMappingURL=todo.js.map