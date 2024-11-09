import styled from "./index.module.css";

const SendBtn = () => {
  return <div className={styled.sendBtn}>보내기</div>;
};

const MessageForm = () => {
  return (
    <div className={styled.root}>
      <input type="text" className={styled.inputMessage} />
      <SendBtn />
    </div>
  );
};

export default MessageForm;
