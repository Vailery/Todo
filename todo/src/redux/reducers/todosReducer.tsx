export interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  time: string;
}

export interface ITodosState {
  todos: ITodoItem[];
}

const defaultState: ITodosState = {
  todos: [],
};

export const todosReucer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_TODO": {
      const date = new Date();
      const newTodo = {
        id: "id" + Math.random().toString(16).slice(2),
        text: action.text,
        completed: false,
        time: `${date.toLocaleDateString()} ${date.toLocaleDateString()}`,
      };
      const newTodos = [...state.todos, newTodo];

      return {
        todos: newTodos,
      };
    }

    case "DELETE_TODO": {
      const newTodos = state.todos.filter((item) => item.id !== action.id);

      return {
        todos: newTodos,
      };
    }

    case "COMPLETE_TODO": {
      const newTodos = state.todos.map((item) => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });

      return {
        todos: newTodos,
      };
    }

    default:
      return state;
  }
};
