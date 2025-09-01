import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import NewUser from "../page/newUsers/NewUser";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'new-user',
            Component:NewUser
        },
    ]
  },
]);