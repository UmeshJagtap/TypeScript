import express from 'express';
import {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todo';

const router = express.Router();

router.route('/').post(createTodo); // Create a new todo item
router.route('/todos').get(getTodo); // Get all todo items
router.route('/:todoId').patch(updateTodo); // Update todo item by ID
router.route('/:todoId').delete(deleteTodo); // Delete a todo item by ID

export default router;
