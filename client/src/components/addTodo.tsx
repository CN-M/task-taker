import axios from "axios";
import { useState } from "react";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");

  //   const addTodo = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8000/", {
  //         method: "POST",
  //         mode: "cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(todo),
  //       });

  //       const data = await res.json();
  //       console.log("succcess", data);
  //     } catch (err) {
  //       console.error("Error:", err);
  //     }
  //   };

  const addTodo = async () => {
    try {
      const res = await axios.post("http://localhost:8000/", { todo });
      console.log("success", res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTodo = (e: any) => {
    e.preventDefault();

    addTodo();

    console.log(todo);
  };

  return (
    <div className="flex flex-col p-10 space-y-5">
      <form onSubmit={handleTodo} className="flex flex-col space-y-3">
        <input
          className="border p-2 border-emerald-500 rounded-md focus:border-blue-500"
          type="text"
          placeholder="Take out the trash"
          //   onChange={(e) => setTodo(e.target.value)}
          onChange={handleChange}
        />
        <button
          className="p-3 rounded-md bg-emerald-600 text-white"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
