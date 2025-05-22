import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Pagenotfound from "./components/Pagenotfound";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";

const App=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resid",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Pagenotfound/>
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>)