import "./App.css";
import { TodoList } from "./components/TodoList/TodoList";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <TodoList />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
