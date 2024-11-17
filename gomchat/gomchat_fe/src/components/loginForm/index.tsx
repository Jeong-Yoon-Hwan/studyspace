import styled from "./index.module.css";

const LoginForm = ({
  name,
  handleChangeName,
  handleLogin,
}: {
  name: string;
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
}) => {
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className={styled.formArea}>
      <input
        type="text"
        className={styled.inputName}
        placeholder="이름을 입력하세요"
        onChange={handleChangeName}
        value={name}
        onKeyDown={activeEnter}
      />
      <div className={styled.loginBtn} onClick={handleLogin}>
        접속하기
      </div>
    </div>
  );
};
export default LoginForm;
