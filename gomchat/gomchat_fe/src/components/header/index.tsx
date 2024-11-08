import { useEffect, useState } from "react";
import styled from "./index.module.css";

const Header = () => {
  const [color, setColor] = useState("#605678");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) =>
        prevColor === "#605678" ? "#FA812F" : "#605678"
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styled.root}>
      <div className={styled.title}>
        <h2 style={{ color: color }}>곰 채팅방</h2>
      </div>
    </div>
  );
};

export default Header;
