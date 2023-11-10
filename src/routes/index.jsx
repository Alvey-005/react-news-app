import { Navigate, createBrowserRouter } from "react-router-dom";
import { MAIN_PATH } from "../constant";
import Layout from "../pages/layout";
import Check from "../pages/check";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:MAIN_PATH.root,
                element: <Navigate to = {`/${MAIN_PATH.root}`}/>
            }
        
            
        ]
        
    },
    {
        path:'hap',
        element: <Check />
    }
  
])

export default router;