import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

interface IProps {
  text: string;
  completed: boolean;
  time: string;
  onDelete: () => void;
  onComplete: () => void;
}

export const TodoItem = ({
  text,
  completed,
  time,
  onDelete,
  onComplete,
}: IProps) => {
  const [showTime, setShowTime] = useState(false);

  const toggleShowTime = () => {
    setShowTime(!showTime);
  };

  return (
    <div className={styles.todo}>
      <Button text="&#10003;" onClick={onComplete} />
      <p
        onClick={toggleShowTime}
        style={{
          textDecoration:
            completed === true ? "gray wavy line-through" : "none",
        }}
      >
        {text}
      </p>
      <Button text="&#10007;" onClick={onDelete} />
      {showTime ? <p className={styles.time}>{time}</p> : null}
    </div>
  );
};
