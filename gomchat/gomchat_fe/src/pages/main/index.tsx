import MessageForm from "../../components/messageForm";
import styled from "./index.module.css";
import ChatArea from "../../components/chatArea";
import { useEffect, useState } from "react";
import useStore from "../../stores/users";
import useWebSocketStore from "../../stores/websocket";

const Main = () => {
  const { ws, connectWebSocket, closeWebSocket } = useWebSocketStore();
  const [message, setMessage] = useState("");
  const user = useStore((state: any) => state.user);

  useEffect(() => {
    if (user !== null) {
      connectWebSocket("ws://192.168.0.6:8088/ws/chat");
    }

    return () => {
      closeWebSocket();
    };
  }, [connectWebSocket, closeWebSocket]);

  return (
    <div className={styled.root}>
      <ChatArea />
      <MessageForm />
    </div>
  );
};

export default Main;
