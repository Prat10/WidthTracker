import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="App">
      <h1>Your Device Width Tracker</h1>
      <div className="text">
        Current Size of a <del>Width:</del> <hr />{" "}
        <span className="width">{windowWidth}</span>
      </div>
    </div>
  );
}
