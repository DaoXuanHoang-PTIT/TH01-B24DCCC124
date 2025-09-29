import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={addTask}>Thêm</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => deleteTask(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
