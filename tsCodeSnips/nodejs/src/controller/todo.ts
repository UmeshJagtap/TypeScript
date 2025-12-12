import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

// const TODO = [{ id: 't1', text: 'Learn TypeScript' }];
const TODO: Todo[] = [];

export const createTodo: RequestHandler = (req, res, err) => {
  //   const text = (req.body as { text: string }).text;  // type assertion way
  const text = (<{ text: string }>req.body).text;

  const newTodo = new Todo(Math.random().toString(), text);

  TODO.push(newTodo);

  res.status(201).json({ message: 'Todo created', newTodo });
};
