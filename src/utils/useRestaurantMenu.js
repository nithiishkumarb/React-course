import { useState,useEffect } from "react";
import {RES_URL} from "./constants";
const useRestaurantMenu=(resid)=>{
    const [resInfo,setresinfo]=useState(null);
    useEffect(()=>{
        fetchmenu();
    },[])
    const fetchmenu=async()=>{
        const data = await fetch(RES_URL+resid);
        const json = await data.json();
        setresinfo(json);
    }
return resInfo;
}
export default useRestaurantMenu;