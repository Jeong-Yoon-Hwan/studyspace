import styled from "./index.module.css";
import MessageBox from "../messageBox";
import { useEffect, useState } from "react";
import useStore from "../../stores/users";
import useWebSocketStore from "../../stores/websocket";

const ChatArea = () => {
  const [msgList, setMsgList] = useState<{ type: string; msg: string }[]>([]);

  const userStore = useStore((state: any) => state.user);

  const ws = useWebSocketStore();

  // ws 스토어의 msg가 변경되면 메시지박스 생성
  useEffect(() => {
    if (ws.msg !== null) {
      const parseMessage = JSON.parse(ws.msg);
      const { user, msg } = parseMessage;
      if (user === userStore) {
        setMsgList([...msgList, { type: "send", msg }]);
      } else {
        setMsgList([...msgList, { type: "receiver", msg }]);
      }
    }
  }, [ws]);

  return (
    <>
      <div className={styled.chatArea}>
        {/* <MessageBox text={"안녕하세요"} type="send" /> */}
        {msgList.map((content, index) => (
          <MessageBox type={content.type} msg={content.msg} key={index} />
        ))}
      </div>
    </>
  );
};

export default ChatArea;
