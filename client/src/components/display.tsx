import { Dispatch, SetStateAction, useEffect } from "react";
import { cn } from "../lib/utils";
import { Todo } from "../types";

export const Display = ({
  todos,
  setTodos,
  isLoading,
  setIsLoading,
}: {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const deleteTask = async (idx: number) => {
    try {
      const res = await fetch("http://localhost:8000/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idx }),
      });

      todos.splice(idx, 1);

      setTodos([...todos]);

      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const updateTask = async (idx: number) => {
    try {
      const res = await fetch("http://localhost:8000/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idx }),
      });

      todos[idx].completed = !todos[idx].completed;

      setTodos([...todos]);

      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8000/");
      const data = await res.json();

      setTodos(data);
      setIsLoading(false);
    };

    getData();
  }, [setIsLoading, setTodos]);

  return (
    <div className=" ">
      <div className="space-y-3">
        {isLoading ? (
          <p>Loading tasks...</p>
        ) : (
          <>
            {todos.length < 1 ? (
              <h3>You have no tasks to display</h3>
            ) : (
              todos?.map((todo, idx) => (
                <div
                  key={idx}
                  onDoubleClick={() => updateTask(idx)}
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
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};
