import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

// const TODO = [{ id: 't1', text: 'Learn TypeScript' }];
const TODO: Todo[] = [{ id: 't1', text: 'Learn TypeScript' }];

export const createTodo: RequestHandler = (req, res, err) => {
  //   const text = (req.body as { text: string }).text;  // type assertion way
  const text = (<{ text: string }>req.body).text;

  const newTodo = new Todo(Math.random().toString(), text);

  TODO.push(newTodo);

  res.status(201).json({ message: 'Todo created', newTodo });
};

export const getTodo: RequestHandler = (req, res, err) => {
  res.status(200).json({ TODO });
  // res.status(200).json({ todos: TODO });
};

export const updateTodo: RequestHandler<{ todoId: string }> = (req, res) => {
  const todoId = req.params.todoId;
  const text = (req.body as { text: string }).text;

  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Todo not found.');
  }

  // update todo text
  if (TODO[todoIndex]) {
    TODO[todoIndex] = new Todo(TODO[todoIndex].id, text);
  }
  res.status(200).json({ message: 'Todo updated', newTodo: TODO[todoIndex] });
};

export const deleteTodo: RequestHandler<{ todoId: string }> = (req, res) => {
  const todoId = req.params.todoId;

  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Todo not found.');
  }

  TODO.splice(todoIndex, 1);

  res.status(200).json({ message: 'Todo deleted' });
};
