import { Outlet } from "react-router-dom";
import Header from "../header";
import styled from "./index.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styled.outletContainer}>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
