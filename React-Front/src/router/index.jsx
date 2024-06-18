import { createBrowserRouter ,redirect} from "react-router-dom";

import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignUp />,
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
  }
]);

export default router;