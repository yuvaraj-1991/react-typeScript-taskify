import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
  // Here we are declaring union so it accepts sting and number <string | number>
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
