import "./App.css";

import { useState } from "react";
import { AddTask } from "./components/addTask";
import { Display } from "./components/display";

import { Todo } from "./types";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="h-full w-full flex flex-col justify-center space-y-4">
      <h1>My Tasks</h1>
      <Display
        todos={todos}
        setTodos={setTodos}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <AddTask
        task={task}
        setTask={setTask}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
