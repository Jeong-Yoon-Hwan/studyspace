import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import Layout from "../components/layout";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
