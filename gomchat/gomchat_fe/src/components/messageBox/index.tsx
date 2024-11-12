import styled from "./index.module.css";

const MessageBox = ({ type, msg, index }: any) => {
  return (
    <div
      className={
        type === "send" ? styled.sendMessageBox : styled.receiveMessageBox
      }
    >
      <div className={styled.messageBox}>{msg}</div>
    </div>
  );
};

export default MessageBox;
