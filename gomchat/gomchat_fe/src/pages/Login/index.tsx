import { useEffect, useState } from "react";
import sytled from "./index.module.css";

const LoginPage = () => {
  const [name, setName] = useState("");

  const handleLogin = () => {
    alert(name + "로그인");
  };

  const handleChanegName = (event: any) => {
    setName(event.target.value);
  };

  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <div className={sytled.root}>
      <header>
        <div className={sytled.headerBox}>
          <h3>로그인</h3>
        </div>
      </header>
      <div className={sytled.formArea}>
        <input
          type="text"
          className={sytled.inputName}
          placeholder=" 이름을 입력하세요"
          onChange={handleChanegName}
        />
        <div className={sytled.loginBtn} onClick={handleLogin}>
          접속하기
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
