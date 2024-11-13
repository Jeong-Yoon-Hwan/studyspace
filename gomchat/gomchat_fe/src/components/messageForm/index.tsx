import { useState } from "react";
import styled from "./index.module.css";
import useWebSocketStore from "../../stores/websocket";
import useStore from "../../stores/users";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const user = useStore((state: any) => state.user);
  const ws = useWebSocketStore();

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  // 유저 정보 및 메시지 전송
  const sendMessage = () => {
    const sendData = {
      user: user,
      msg: message,
    };
    ws.sendMessage(sendData);
  };

  return (
    <div className={styled.root}>
      <input
        type="text"
        className={styled.inputMessage}
        onChange={handleMessageChange}
      />
      <div className={styled.sendBtn} onClick={sendMessage}>
        보내기
      </div>
    </div>
  );
};

export default MessageForm;
