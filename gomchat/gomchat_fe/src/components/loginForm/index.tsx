import styled from "./index.module.css";

const LoginForm = ({
  name,
  handleChangeName,
  handleLogin,
}: {
  name: string;
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
}) => (
  <div className={styled.formArea}>
    <input
      type="text"
      className={styled.inputName}
      placeholder="이름을 입력하세요"
      onChange={handleChangeName}
      value={name}
    />
    <div className={styled.loginBtn} onClick={handleLogin}>
      접속하기
    </div>
  </div>
);
export default LoginForm;
