import { useState } from "react";
import { ChangeEvent } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./Form.module.css";

interface IProps {
  addNewTodo: (text: string) => void;
}

export const Form = ({ addNewTodo }: IProps) => {
  const [text, setText] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handeAddNewTodo = () => {
    addNewTodo(text.trim());
    setText("");
  };

  return (
    <div className={styles.main}>
      <Input value={text} onChange={onChange} />
      <Button text="&#43;" onClick={handeAddNewTodo} />
    </div>
  );
};
