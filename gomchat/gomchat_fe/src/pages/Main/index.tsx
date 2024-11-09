import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../stores/users";

const Main = () => {
  const navigate = useNavigate();

  const user = useStore((state) => state);

  useEffect(() => {}, []);

  return <div>메인</div>;
};

export default Main;
