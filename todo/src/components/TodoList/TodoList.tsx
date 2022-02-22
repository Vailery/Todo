import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  completeTodo,
  deleteTodo,
} from "../../redux/actions/todosActions";
import { ITodosState } from "../../redux/reducers/todosReducer";
import { IState } from "../../redux/store";
import { Form } from "../Form/Form";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const date = new Date();
  const todos = useSelector((state: IState) => state.todosReducer.todos);
  const dispatch = useDispatch();

  const onClickDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const onClickComplete = (id: string) => {
    dispatch(completeTodo(id));
  };

  const addNewTodo = (text: string) => {
    return text !== "" ? dispatch(addTodo(text)) : null;
  };

  const completedCount = todos.reduce((prev, curr) => {
    if (curr.completed) {
      return prev + 1;
    }
    return prev;
  }, 0);

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
        {todos.map((item) => {
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
      </div>
    </div>
  );
};
