import { combineReducers, createStore } from "redux";
import {
  todosReducer,
  defaultState,
  ITodosState,
} from "./reducers/todosReducer";
import { counterReducer } from "./reducers/counterReducer";

export interface IState {
  todosReducer: ITodosState;
  counterReducer: any;
}

function saveToLocalStorage(state: any) {
  try {
    const localState = JSON.stringify(state);
    localStorage.setItem("todosLocalState", localState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const localState = localStorage.getItem("todosLocalState");
    if (localState === null) return undefined;
    return JSON.parse(localState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  combineReducers({ todosReducer, counterReducer }),
  loadFromLocalStorage()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
