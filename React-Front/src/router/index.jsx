import { createBrowserRouter ,redirect} from "react-router-dom";


import User from "../pages/User";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignUp />,
    },

    {
        path: "/User",
        element: <User />,
        loader: () => {
            if (localStorage.role != "Admin") {
               alert("No eres admin")
                return redirect("/")
            }else {
                return null
            }
    }
  }
]);

export default router;