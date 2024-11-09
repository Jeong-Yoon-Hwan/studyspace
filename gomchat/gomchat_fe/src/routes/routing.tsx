import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import Layout from "../components/layout";
import MainPage from "../pages/main";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
