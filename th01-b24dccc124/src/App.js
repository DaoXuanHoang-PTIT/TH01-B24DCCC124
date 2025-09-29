import React from "react";
import TextCounter from "./th01/bt1/Textcounter";
import TrafficLight from "./th01/bt2/TrafficLight";
import TodoList from "./th01/bt3/TodoList";

function App() {
  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>TH01 - React Exercises</h1>

      {/* Bài 1: Bộ đếm ký tự */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Bài 1: Bộ đếm ký tự</h2>
        <TextCounter />
      </section>

      {/* Bài 2: Đèn giao thông */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Bài 2: Đèn giao thông</h2>
        <TrafficLight />
      </section>

      {/* Bài 3: Danh sách công việc */}
      <section>
        <h2>Bài 3: Danh sách công việc</h2>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
