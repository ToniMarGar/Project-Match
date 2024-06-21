import { createBrowserRouter ,redirect} from "react-router-dom";

import Root from "../pages/Layouts/index";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Profile from "../pages/Profile/Profile";
import Quizz from "../pages/Quizz/Quizz";
import Destination from '../pages/Destination/Destination'
import NotFound from "../pages/NotFound/NotFound";


const router = createBrowserRouter([{
        path: "/",
        element: <Root />,
        errorElement: <NotFound/>,
        children:[
            {
                path: "/Home",
                element: <Home />,
            },
            {
                path: "/SignUp",
                element: <SignUp />,
            },
            {
                path: "/LogIn",
                element: <LogIn />,
            },
            {
                path: "/Profile",
                element: <Profile />,
                loader: () => {
                    if (localStorage.role != "Admin") {
                       alert("No eres admin")
                        return redirect("/")
                    }else {
                        return null
                    }
                }
            },
            {
                path: "/",
                element: <Quizz />,
            },
            {
                path: "/Destination",
                element: <Destination />,
            },
            
        ]
    },
]);

export default router;