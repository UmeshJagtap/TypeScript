import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
const AddTodo = () => {
  const [text, setText] = useState('');
  return (
    <form className="flex items-center gap-4">
      {/* AddTodo Component */}
      <Input type="text" placeholder="Add todo..." />
      <Button type="submit" className="m-2">
        Add Todo
      </Button>
    </form>
  );
};
export default AddTodo;
