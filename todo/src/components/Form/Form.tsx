import { useState } from "react";
import { ChangeEvent } from "react";
import { setTextRange } from "typescript";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

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
    <div>
      <Input value={text} onChange={onChange} />
      <Button text="Добавить" onClick={handeAddNewTodo} />
    </div>
  );
};
