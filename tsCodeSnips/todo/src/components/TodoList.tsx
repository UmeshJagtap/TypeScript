import React from 'react';
import { Card, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Delete } from 'lucide-react';

type TodoListProps = {
  items: { id: string; text: string }[];
  onRemoveTodo: (todoId: string) => void;
};
const TodoList: React.FC<TodoListProps> = (props) => {
  console.log('Items' + JSON.stringify(props.items));
  return (
    <div className="my-5 gap-4">
      {props.items.map((todo) => (
        <Card key={todo.id} className="mb-2">
          <CardHeader className="flex flex-row items-center justify-between ">
            <CardTitle>{todo.text}</CardTitle>
            <Button
              onClick={() => props.onRemoveTodo(todo.id)}
              className="h-6 w-8"
              variant={'destructive'}
            >
              {/* <Delete />x */}
              <Delete />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
