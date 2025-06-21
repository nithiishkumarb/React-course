import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext  from "../utils/usecontext";
const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedIdUser}=useContext(UserContext);
    return(
        <div className="flex justify-between bg-pink-100">
            <div className="w-42">
                <img src={LOGO_URL} alt="Logo"/>
            </div>
            <div className="flex items-center px-3">
                <ul className="flex gap-10">
                    <li>Online Status :{onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li> <Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{
                        btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                    <span>{loggedIdUser}</span>
                </ul>
            </div>
        </div>
    )
}

export default Header;