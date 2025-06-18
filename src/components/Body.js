import Resturantcard,{WithLabel} from "./ResturantCard";
import {useEffect, useState} from "react"
import {resobj} from "../utils/mockdata";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
    const [listOfRestaurant,setListofRestaurant]=useState(resobj);
    const [filterRestaurent,setFilterRestaurant]=useState(resobj);
    const [search,setSearch]=useState("")
    const onlineStatus=useOnlineStatus();

    const PromtedLabel=WithLabel(Resturantcard);

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData= async ()=>{
        const data= await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.9691676&lng=76.8922729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        const Resturant=json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListofRestaurant(Resturant);
        setFilterRestaurant(Resturant);
    }
    if(onlineStatus===false){
        return(
            <div>
                <h1>Oops !!! you are offline, Please check the internet connection</h1>
            </div>
        )
    }
    return(
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type="text" placeholder="Search" className="border border-black rounded-md" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button className="px-4 py-1 m-4 bg-fuchsia-100 rounded-1xl cursor-pointer" onClick={()=>{
                       const filter = listOfRestaurant.filter((res)=>(
                        res?.info.name.toLowerCase().includes(search.toLowerCase())
                       ))
                       setFilterRestaurant(filter);
                    }}>Search</button>
                </div>
                <div>
                    <button  className="px-4 py-1 bg-fuchsia-100 rounded-1xl cursor-pointer" onClick={()=>{
                        const sortList=listOfRestaurant.filter((rest) => (rest.info.avgRating > 4.5))
                        setListofRestaurant(sortList)
                    }}>Filter top Resturants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filterRestaurent?.map(res=>(
                    <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
                        {
                            res.info.avgRating
> 4.3 ? <PromtedLabel resobj={res}/>:<Resturantcard resobj={res}/>
                        }
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;