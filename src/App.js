import React, { useState } from "react";
import "./app.css";
import Tasks from "./components/tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
    ]);
  return (
    <>
    <div className="container">
      <Tasks/>
      </div>
    </>
      )
};
export default App;