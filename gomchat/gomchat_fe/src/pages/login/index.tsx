import { useEffect, useState } from "react";
import styled from "./index.module.css";
import useStore from "../../stores/users";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/loginForm";

const LoginPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // userStorage
  const { user, setUser }: any = useStore((state) => state);

  useEffect(() => {
    // user가 저장되면 main으로 이동
    if (user !== null) {
      navigate("/main");
    }
  }, [user]);

  const handleLogin = () => {
    // 입력값이 없으면 return
    if (name === "") {
      alert("이름을 입력해주세요");
      return;
    }
    setUser(name);
  };

  // name 업데이트
  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };

  const Header = () => {
    return (
      <header>
        <div className={styled.headerBox}>
          <h3>LOG IN</h3>
        </div>
      </header>
    );
  };

  return (
    <div className={styled.root}>
      <Header />
      <LoginForm
        name={name}
        handleChangeName={handleChangeName}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
