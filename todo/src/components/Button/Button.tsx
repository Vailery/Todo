import { Component } from "react";
import styles from "./Button.module.css";

interface IProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IProps) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      {text}
    </button>
  );
};
