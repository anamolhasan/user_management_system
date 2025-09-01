import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import NewUser from "../page/newUsers/NewUser";
import Loading from "../components/Loading";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index:true,
            Component:Home,
            loader:()=> fetch(`${import.meta.env.VITE_API_URL}/users`),
            hydrateFallbackElement: <Loading />
        },
        {
            path:'new-user',
            Component:NewUser
        },
    ]
  },
]);