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
      <p style={{ color: "#666" }}>Add tasks that you need to complete!</p>
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
          {/* Add a header above the list of tasks */}
    <h2 style={{ marginTop: "2rem" }}>Task List</h2>
      <p style={{ color: "#666" }}>Stay on top of your tasks, You Got THIS!</p>
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
          {/* Add a header above the calendar */}
    <h2 style={{ marginTop: "2rem" }}>Calendar</h2>
    <p style={{ color: "#666" }}>What does your schedule look like this week?</p>
      {/* Google Calendar Embed Below */}
      <div style={{ margin: "2rem 0" }}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://calendar.google.com/calendar/embed?src=ec7b34ffb2e6802b5f764aa8c57f362c9b9872cabfc992ab26f74ab308774ffb%40group.calendar.google.com&ctz=America%2FLos_Angeles" style="border: 0" width="500" height="300" frameborder="0" scrolling="no"></iframe>`
          }}
        />
      </div>
    </div>
  );
}

export default App;