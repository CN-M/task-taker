import { Dispatch, SetStateAction } from "react";
import { Todo } from "../types";

export const AddTask = ({
  task,
  setTask,
  todos,
  setTodos,
}: {
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}) => {
  const addTask = async () => {
    try {
      const res = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });

      const newTodo: Todo = {
        task: task,
        completed: false,
      };

      setTodos([...todos, newTodo]);

      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setTask(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTask = (e: any) => {
    e.preventDefault();

    addTask();
    setTask("");
  };

  return (
    <div className="flex flex-col p-10 space-y-5">
      <form onSubmit={handleTask} className="flex flex-col space-y-3">
        <input
          className="border p-2 border-emerald-500 rounded-md focus:border-blue-500"
          type="text"
          placeholder="Take out the trash"
          value={task}
          //   onChange={(e) => setTask(e.target.value)}
          onChange={handleChange}
        />
        <button
          className="p-3 rounded-md bg-emerald-600 text-white"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};
