import { useEffect, useState } from "react";
export const Display = () => {
    const [msg, setMsg] = useState({ message: "" });
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("http://localhost:8000/");
            const data = await res.json();
            setMsg(data);
        };
        getData();
    }, []);
    return (<>
      <h1 className="">This is the thunderdome</h1>
      {msg.message === "" ? (<p className="">No Message to display</p>) : (<p className="">{msg.message}</p>)}
    </>);
};
