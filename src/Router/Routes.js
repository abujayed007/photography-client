import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import ClientReviews from "../Pages/SetReviews/ClientReviews";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader: () =>{
                    return fetch ('https://photography-server-phi.vercel.app/services')
                }
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/services/:id',
                element:<PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: ({params})=> fetch(`https://photography-server-phi.vercel.app/services/${params.id}`)
                
            },
            {
                path:'/myreviews',
                element:<PrivateRoutes><ClientReviews></ClientReviews></PrivateRoutes>,
                
            },
            {
                
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ],
    
        
    },
   {
    path:'/*',
    element:<Error></Error>
   }
])

export default router