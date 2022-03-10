import { ACTIONS, TODOS_VISIBILITY } from "../constants";

export const addTodo = (text: string) => {
  return {
    type: ACTIONS.ADD_TODO,
    text: text,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: ACTIONS.DELETE_TODO,
    id: id,
  };
};

export const completeTodo = (id: string) => {
  return {
    type: ACTIONS.COMPLETE_TODO,
    id: id,
  };
};

export const showAll = () => {
  return {
    type: TODOS_VISIBILITY.SHOW_ALL,
  };
};

export const showActive = () => {
  return {
    type: TODOS_VISIBILITY.SHOW_ACTIVE,
  };
};

export const showDone = () => {
  return {
    type: TODOS_VISIBILITY.SHOW_DONE,
  };
};
