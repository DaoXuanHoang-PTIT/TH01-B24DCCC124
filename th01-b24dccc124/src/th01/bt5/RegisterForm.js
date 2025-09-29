import React, { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Không được bỏ trống!");
      return;
    }
    setError("");
    setSubmitted({ name, email, password });
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Form Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Đăng ký</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && (
        <div style={{ marginTop: "15px" }}>
          <h3>Thông tin đã nhập:</h3>
          <p>Tên: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Mật khẩu: {submitted.password}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
