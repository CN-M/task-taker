import "./App.css";

import { AddTodo } from "./components/addTodo.js";
import { Display } from "./components/display.js";

function App() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-cente">
      <Display />
      <AddTodo />
    </div>
  );
}

export default App;
