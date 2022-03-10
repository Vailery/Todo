import { ACTIONS, TODOS_VISIBILITY } from "../constants";

export interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  time: string;
}

export interface ITodosState {
  todos: ITodoItem[];
}

export const defaultState: ITodosState = {
  todos: [],
};

export const todosReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
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

    case ACTIONS.DELETE_TODO: {
      const newTodos = state.todos.filter((item) => item.id !== action.id);

      return {
        todos: newTodos,
      };
    }

    case ACTIONS.COMPLETE_TODO: {
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

export const todosVisibility = (
  state = TODOS_VISIBILITY.SHOW_ALL,
  action: any
) => {
  switch (action.type) {
    case TODOS_VISIBILITY.SHOW_ALL:
      return TODOS_VISIBILITY.SHOW_ALL;
    case TODOS_VISIBILITY.SHOW_ACTIVE:
      return TODOS_VISIBILITY.SHOW_ACTIVE;
    case TODOS_VISIBILITY.SHOW_DONE:
      return TODOS_VISIBILITY.SHOW_DONE;
    default:
      return state;
  }
};
