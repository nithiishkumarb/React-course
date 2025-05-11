import Resturantcard from "./ResturantCard";
import {useState} from "react"
import {resobj} from "../utils/mockdata";

const Body=()=>{
    const [listOfRestaurant,setListofRestaurant]=useState(resobj);
    return(
        <div className="body">
            <div className="filter">
                <button onClick={()=>{
                    const sortList=listOfRestaurant.filter((rest) => (rest.info.avgRating > 4.5))
                    setListofRestaurant(sortList)
                }}>Filter top Resturants</button>
            </div>
            <div className="rest-container">
                {listOfRestaurant.map(res=>(
                    <Resturantcard key={res.info.id}resobj={res}/>
                ))}
            </div>
        </div>
    )
}

export default Body;