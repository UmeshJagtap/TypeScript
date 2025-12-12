import express from 'express';
import { createTodo } from '../controller/todo';

const router = express.Router();

router.route('/').post(createTodo); // Create a new todo item
router.route('/').get(); // Get all todo items
router.route('/:todoId').patch(); // Update todo item by ID
router.route('/:todoId').delete(); // Delete a todo item by ID

export default router;
