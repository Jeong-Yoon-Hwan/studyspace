import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../stores/users";
import MessageForm from "../../components/messageForm";
import styled from "./index.module.css";

const ChatArea = () => {
  return (
    <>
      <div className={styled.chatArea}>채팅 박스</div>
    </>
  );
};

const Main = () => {
  const navigate = useNavigate();

  const user = useStore((state) => state);

  return (
    <div className={styled.root}>
      <ChatArea />
      <MessageForm />
    </div>
  );
};

export default Main;
