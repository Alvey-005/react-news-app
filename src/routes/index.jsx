import { Navigate, createBrowserRouter } from "react-router-dom";
import { MAIN_PATH } from "../constant";
import Layout from "../pages/layout";
import Home from "../pages/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
  
])

export default router;