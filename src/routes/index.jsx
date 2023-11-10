import { Navigate, createBrowserRouter } from "react-router-dom";
import { MAIN_PATH } from "../constant";
import Layout from "../pages/layout";
import Home from "../pages/Home";
import Category from "../pages/Category";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/:paper/:category",
        element: <Category />
    }
  
])

export default router;