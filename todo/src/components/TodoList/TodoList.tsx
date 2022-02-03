import { useState } from "react";
import { Form } from "../Form/Form";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  time: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const date = new Date();

  const onClickDelete = (id: string) => {
    const newTodos = todos.filter((item) => item.id !== id);

    setTodos(newTodos);
  };

  const onClickComplete = (id: string) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodos(newTodos);
  };

  const addNewTodo = (text: string) => {
    const date = new Date();
    if (text !== "") {
      const newTodo = {
        id: "id" + Math.random().toString(16).slice(2),
        text: text,
        completed: false,
        time: date.toLocaleString(),
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    } else {
      alert("Введи todo");
    }
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
