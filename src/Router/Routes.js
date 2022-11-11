import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
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
                    return fetch ('http://localhost:5001/services')
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
                loader: ({params})=> fetch(`http://localhost:5001/services/${params.id}`)
                
            },
            {
                path:'/myreviews',
                element:<PrivateRoutes><ClientReviews></ClientReviews></PrivateRoutes>,
                
            },
            {
                
                
            }
        ]
        
    },
   
])

export default router