import "./App.css";

import { AddTask } from "./components/addTask";
import { Display } from "./components/display";

function App() {
  return (
    <div className="h-full w-full flex flex-col justify-center space-y-4">
      <h1>My Tasks</h1>
      <Display />
      <AddTask />
    </div>
  );
}

export default App;
