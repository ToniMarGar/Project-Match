import { createBrowserRouter ,redirect} from "react-router-dom";

import Root from "../pages/Layouts/root";
import Home from "../pages/Home/Home";
/* import SignUp from "../pages/SignUp/SignUp"; */
import {SignUp} from '../pages/SignUp/SignUp'
import NotFound from "../pages/NotFound/NotFound";
import LogIn from "../pages/LogIn/LogIn";
//import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import Quizz from "../pages/Quizz/Quizz";

const router = createBrowserRouter([{
        path: "/",
        element: <Root />,
        errorElement: <NotFound/>,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/SignUp",
                element:  <SignUp/> ,
            },
            {
                path: "/LogIn",
                element: <LogIn />,
            },
            {
                path: "/Profile",
                element: <Profile />,
            },
            {
                path: "/Quizz",
                element: <Quizz />,
            }
            
        ]
    },
]);

export default router;
