import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

// You can write in this way as well.
// const InputField: React.FC<Props> = ({ todo, setTodo }) => {
const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form action="" className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
