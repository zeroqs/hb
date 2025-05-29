import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./App.css";
import cat from "./assets/hb-cat.jpg";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Confetti width={windowSize.width} height={windowSize.height} />

      <h1 style={{ fontSize: "3rem", color: "#ff69b4" }}>
        С Днём Рождения! 🎂 🎉
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "2rem", color: "#ff69b4" }}>
        🎁 Желаю радости, тепла и вдохновения каждый день! 🧁
      </p>

      <img
        src={cat}
        alt="Милый котик"
        style={{
          width: "300px",
          borderRadius: "20px",
          marginTop: "1rem",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}

export default App;
