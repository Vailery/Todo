import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  showActive,
  showAll,
  showDone,
} from "../../redux/actions/todosActions";
import { TODOS_VISIBILITY } from "../../redux/constants";
import { IState } from "../../redux/store";
import { Form } from "../Form/Form";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const date = new Date();
  const todos = useSelector((state: IState) => state.todosReducer.todos);
  const todosVisibility = useSelector((state: IState) => state.todosVisibility);
  const dispatch = useDispatch();

  const routes = [
    { to: "/", text: "All", action: showAll },
    { to: "/active", text: "Active", action: showActive },
    { to: "/done", text: "Done", action: showDone },
  ];

  const onClickDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const onClickComplete = (id: string) => {
    dispatch(completeTodo(id));
  };

  const addNewTodo = (text: string) => {
    return text !== "" ? dispatch(addTodo(text)) : null;
  };

  const filterTodos = (todos: any, todosVisibility: string) => {
    switch (todosVisibility) {
      case TODOS_VISIBILITY.SHOW_DONE:
        return todos.filter((item: { completed: boolean }) => item.completed);
      case TODOS_VISIBILITY.SHOW_ACTIVE:
        return todos.filter((item: { completed: boolean }) => !item.completed);
      default:
        return todos;
    }
  };

  const completedCount = todos.reduce((prev, curr) => {
    if (curr.completed) {
      return prev + 1;
    }
    return prev;
  }, 0);

  const filteredTodos = filterTodos(todos, todosVisibility);

  return (
    <div className={styles.main}>
      <div className={styles.headerImage}>
        <p>{date.toLocaleString("en-US", { day: "numeric" })}</p>

        <div className={styles.date}>
          <p>{date.toLocaleString("en-US", { weekday: "long" })}</p>
          <p>{date.toLocaleString("en-US", { month: "long" })}</p>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.info}>
          <p>Your tasks</p>
          <p>
            {completedCount} / {todos.length} tasks
          </p>
        </div>

        <Form addNewTodo={addNewTodo} />

        <div className={styles.todosChoise}>
          {routes.map(({ to, text, action }) => (
            <Link key={text} to={to} onClick={() => dispatch(action())}>
              {text}
            </Link>
          ))}
        </div>

        {filteredTodos.map((item: any) => {
          return (
            <TodoItem
              key={item.id}
              text={item.text}
              onComplete={() => onClickComplete(item.id)}
              onDelete={() => onClickDelete(item.id)}
              completed={item.completed}
              time={item.time}
            />
          );
        })}
        {todos.length === 0 ? <p>Let's do it!</p> : null}
        {console.log(filterTodos(todos, "SHOW_DONE"))}
      </div>
    </div>
  );
};
