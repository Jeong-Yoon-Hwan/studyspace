import { useEffect, useState } from "react";
import styled from "./index.module.css";
import { useNavigate } from "react-router-dom";
import useStore from "../../stores/users";

const Header = () => {
  const [color, setColor] = useState("#605678");

  const user = useStore((state: any) => state.user);
  const removeUser = useStore((state: any) => state.removeUser);

  const navigate = useNavigate();

  // user정보를 제거하고 login 페이지로 이동.
  const handleExit = () => {
    if (confirm(user + "님 나가시겠습니까?")) {
      removeUser(); // 유저 제거
      navigate("/"); // 로그인페이지로 이동
    }
  };

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
        {/* 접속 중일때만 나가기 표시 */}
        {user !== null ? <div onClick={handleExit}> 나가기 </div> : null}
      </div>
    </div>
  );
};

export default Header;
