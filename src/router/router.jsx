import {
  createBrowserRouter,
} from "react-router";
import Homelayout from "../layout/Homelayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homelayout,
    
    children: [
        {
            index: true,
            path: '/',
            Component: Home,
        }
    ]
  },
]);

export default router;