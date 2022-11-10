import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";

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
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5001/services/${params.id}`)
                
            }
        ]
        
    },
   
])

export default router