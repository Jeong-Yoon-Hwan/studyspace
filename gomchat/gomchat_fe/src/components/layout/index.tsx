import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../header";
import styled from "./index.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styled.outletContainer}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
