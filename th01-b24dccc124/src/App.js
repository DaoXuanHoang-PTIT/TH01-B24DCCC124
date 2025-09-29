import React from "react";
import TextCounter from "./th01/bt1/Textcounter";
import TrafficLight from "./th01/bt2/TrafficLight";
import TodoList from "./th01/bt3/TodoList";
import Cart from "./th01/bt4/Cart";
import RegisterForm from "./th01/bt5/RegisterForm";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>TH01 - React Exercises</h1>

      <h2>Bài 1: Bộ đếm ký tự</h2>
      <TextCounter />

      <h2>Bài 2: Đèn giao thông</h2>
      <TrafficLight />

      <h2>Bài 3: Danh sách công việc</h2>
      <TodoList />

      <h2>Bài 4: Giỏ hàng</h2>
      <Cart />

      <h2>Bài 5: Form Đăng ký</h2>
      <RegisterForm />  
    </div>
  );
}

export default App;
