  import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => setTask(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleDone = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}>
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a new task"
          style={{ padding: "0.5rem", width: "70%" }}
        />
        <button type="submit" style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
          Add
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
        {tasks.map((t, i) => (
          <li
            key={i}
            style={{
              textAlign: "left",
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center",
              textDecoration: t.done ? "line-through" : "none",
              color: t.done ? "#888" : "#000"
            }}
          >
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleDone(i)}
              style={{ marginRight: "0.5rem" }}
            />
            <span style={{ flexGrow: 1 }}>{t.text}</span>
            <button
              onClick={() => deleteTask(i)}
              style={{
                marginLeft: "0.5rem",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                padding: "0.25rem 0.5rem"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;