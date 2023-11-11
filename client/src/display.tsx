import { useEffect, useState } from "react";

type Message = {
  message: string;
};

export const Display = () => {
  const [msg, setMsg] = useState<Message>({ message: "" });

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8000/");
      const data = await res.json();

      setMsg(data);
    };

    getData();
  }, []);

  return (
    <>
      <h1 className="">This is the thunderdome</h1>
      {msg.message === "" ? (
        <p className="text-2xl">No Message to display</p>
      ) : (
        <p className="text-2xl">{msg.message}</p>
      )}
    </>
  );
};
