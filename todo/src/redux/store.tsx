import { createStore } from "redux";
import { todosReucer, defaultState } from "./reducers/todosReducer";

function saveToLocalStorage(state = defaultState) {
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

const store = createStore(todosReucer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
