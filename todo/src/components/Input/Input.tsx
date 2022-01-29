import { Component } from "react";
import styles from "./Input.module.css";
import {ChangeEventHandler} from "react";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ value, onChange }: IProps) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      className={styles.todoInput}
    />
  );
};
