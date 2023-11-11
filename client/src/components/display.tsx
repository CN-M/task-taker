import { useEffect, useState } from "react";

type Todo = {
  task: string;
  completed: boolean;
};

// type Message = {
//   message: string;
// };

export const Display = () => {
  // const [msg, setMsg] = useState<Message>({ message: "" });
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8000/");
      const data = await res.json();

      setTodos(data);
    };

    getData();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="">This is the thunderdome</h1>
      <div className="space-y-3">
        {todos?.map((todo, idx) => (
          <div key={idx} className="border rounded-md p-3 border-emerald-300">
            <p className="text-2xl">{todo.task}</p>
            <p className="text-xl">
              {todo.completed ? "Complete" : "Incomplete"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
