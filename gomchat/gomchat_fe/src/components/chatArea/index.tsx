import styled from "./index.module.css";
import MessageBox from "../messageBox";
import { useEffect, useState } from "react";
import useStore from "../../stores/users";

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [msgList, setMsgList] = useState<{ type: string; msg: string }[]>([]);
  // setTimeout(() => {
  //   setMsgList([...msgList, { type: "send", msg: "Hi" }]);
  // }, 1000);
  const user = useStore((state: any) => state.user);

  // useEffect(() => {
  //   const websocket = new WebSocket("ws://localhost:8088/ws/chat");
  //   if (user !== null) {
  //     websocket.onopen = (event: any) => {
  //       const receiveData = JSON.parse(event.data);
  //       setMessage(receiveData.message);
  //     };
  //   }
  //   setWs(websocket);
  //   console.log(websocket);

  //   websocket.onclose = () => {
  //     console.log("WebSocket 연결이 닫혔습니다");
  //   };

  //   return () => {
  //     websocket.close();
  //   };
  // }, []);

  return (
    <>
      <div className={styled.chatArea}>
        {/* <MessageBox text={"안녕하세요"} type="send" /> */}
        {msgList.map((content, index) => (
          <MessageBox type={content.type} msg="안녕하세요" key={index} />
        ))}
      </div>
    </>
  );
};

export default ChatArea;
