import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Pagenotfound from "./components/Pagenotfound";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import UserContext from "./utils/usecontext";

const App=()=>{
    const [userName,setuserName]=useState("");

    useEffect(()=>{
        const data={
            loggedIdUser:"Nithish"
        }
        setuserName(data.loggedIdUser)
    },[])
    return (
        <UserContext.Provider value={{loggedIdUser: userName, setuserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
}

const Grocery=lazy(()=> import("./components/Grocery"));

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
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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