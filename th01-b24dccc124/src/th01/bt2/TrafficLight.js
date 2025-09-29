import React, { useState, useEffect } from "react";

function TrafficLight() {
  const lights = ["red", "green", "yellow"];
  const [current, setCurrent] = useState(0);

  // Tự động chuyển đèn sau mỗi 2 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % lights.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nextLight = () => {
    setCurrent((prev) => (prev + 1) % lights.length);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Đèn giao thông</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Đèn đỏ */}
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: current === 0 ? "red" : "gray",
          }}
        ></div>

        {/* Đèn vàng */}
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: current === 2 ? "yellow" : "gray",
          }}
        ></div>

        {/* Đèn xanh */}
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: current === 1 ? "green" : "gray",
          }}
        ></div>
      </div>

      <button
        onClick={nextLight}
        style={{ marginTop: "15px", padding: "8px 12px" }}
      >
        Chuyển đèn
      </button>
    </div>
  );
}

export default TrafficLight;