import { RequestHandler } from 'express';
export declare const createTodo: RequestHandler;
export declare const getTodo: RequestHandler;
export declare const updateTodo: RequestHandler<{
    todoId: string;
}>;
export declare const deleteTodo: RequestHandler<{
    todoId: string;
}>;
//# sourceMappingURL=todo.d.ts.map