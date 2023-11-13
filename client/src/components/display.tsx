import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // const deleteTask = async (idx: number) => {
  const deleteTask = (idx: number) => {
    console.log(`Task ${idx + 1} deleted`);

    // try {
    //   const res = await fetch("http://localhost:8000/", {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ idx }),
    //   });

    //   const data = await res.json();
    //   console.log("succcess", data);
    // } catch (err) {
    //   console.error("Error:", err);
    // }
  };

  // const updateTask = async (idx: number) => {
  const updateTask = (idx: number) => {
    console.log(`Task ${idx + 1} updated`);
    // try {
    //   const res = await fetch("http://localhost:8000/", {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ idx }),
    //   });

    //   const data = await res.json();
    //   console.log("succcess", data);
    // } catch (err) {
    //   console.error("Error:", err);
    // }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8000/");
      const data = await res.json();

      setTodos(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className=" ">
      <div className="space-y-3">
        {isLoading ? (
          <p>Loadding tasks...</p>
        ) : (
          <>
            {todos?.map((todo, idx) => (
              <div
                key={idx}
                onClick={() => updateTask(idx)}
                className="border rounded-md p-3 border-emerald-300"
              >
                <div className="flex justify-around py-2 px-10 gap-3 hover:cursor-pointer">
                  <p
                    className={cn(
                      "text-2xl",
                      todo.completed ? "line-through" : ""
                    )}
                  >
                    {todo.task}
                  </p>
                  <button
                    onClick={() => deleteTask(idx)}
                    className="bg-red-500 text-sm text-white tracking-widest border-none hover:bg-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
