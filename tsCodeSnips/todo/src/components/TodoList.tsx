import React from 'react';
import { Card, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

type TodoListProps = {
  items: { id: string; text: string }[];
};
const TodoList: React.FC<TodoListProps> = (props) => {
  console.log('Items' + JSON.stringify(props.items));
  return (
    <div className="my-5">
      {props.items.map((todo) => (
        <Card key={todo.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{todo.text}</CardTitle>
            <Button className="h-6 w-6" variant={'destructive'}>
              {/* <Delete /> */}x
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
