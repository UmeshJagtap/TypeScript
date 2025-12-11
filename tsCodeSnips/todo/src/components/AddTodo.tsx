import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState<string>('');

  const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddTodo(text);
    alert('Todo Added: ' + text);
    console.log('Todo Added: ' + text);
    setText('');
  };

  return (
    <form onSubmit={submitHandler} className="flex items-center gap-4">
      {/* AddTodo Component */}
      <Input
        onChange={changeEventHandler}
        type="text"
        placeholder="Mention a todo..."
      />
      <Button type="submit" className="m-2">
        Add Todo
      </Button>
    </form>
  );
};
export default AddTodo;
