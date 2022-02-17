import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todosReucer } from "./reducers/todosReducer";

export const store = createStore(todosReucer, composeWithDevTools());
