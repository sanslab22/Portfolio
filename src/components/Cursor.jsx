import { useState, useEffect } from "react";

const GradientCursor = ({ position }) => {
  const style = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9999,
    transform: "translate(-50%, -50%)",
    background: `radial-gradient(circle at center, #182b24, #182b24 90%)`,
    // Optional: apply blur or other "liquid" stylings
    backdropFilter: "blur(2px)",
    boxShadow: "0 0 15px 20px rgba(45,89,73,0.5)",
  };

  return <div style={style} />;
};

const LiquidCursor = ({ position }) => {
  const style = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(1px)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  return <div style={style} />;
};

const Cursor = ({ isDarkMode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return isDarkMode ? <GradientCursor position={position} /> : <LiquidCursor position={position} />;
};

export default Cursor;
