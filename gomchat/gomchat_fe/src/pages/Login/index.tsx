import { useEffect, useState } from "react";
import sytled from "./index.module.css";
import useStore from "../../stores/users";
import { useNavigate } from "react-router-dom";

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
  const handleChanegName = (event: any) => {
    setName(event.target.value);
  };

  return (
    <div className={sytled.root}>
      <header>
        <div className={sytled.headerBox}>
          <h3>LOG IN</h3>
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
