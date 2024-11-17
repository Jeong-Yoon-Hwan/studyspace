import styled from "./index.module.css";

const MessageBox = ({ type, msg, user, index }: any) => {
  return (
    <div
      className={
        type === "send" ? styled.sendMessageBox : styled.receiveMessageBox
      }
    >
      {type !== "send" ? <div className={styled.user}>{user}</div> : null}
      <div
        className={type === "send" ? styled.sendMessage : styled.receiveMessage}
      >
        {msg}
      </div>
    </div>
  );
};

export default MessageBox;
