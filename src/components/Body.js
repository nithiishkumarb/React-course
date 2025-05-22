import Resturantcard from "./ResturantCard";
import {useEffect, useState} from "react"
import {resobj} from "../utils/mockdata";
import { Link } from "react-router";
const Body=()=>{
    const [listOfRestaurant,setListofRestaurant]=useState(resobj);
    const [filterRestaurent,setFilterRestaurant]=useState(resobj);
    const [search,setSearch]=useState("")
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData= async ()=>{
        const data= await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.9691676&lng=76.8922729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        const Resturant=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        setListofRestaurant(Resturant);
        setFilterRestaurant(Resturant);
    }
    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button onClick={()=>{
                       const filter = listOfRestaurant.filter((res)=>(
                        res?.info.name.toLowerCase().includes(search.toLowerCase())
                       ))
                       setFilterRestaurant(filter);
                    }}>Search</button>
                </div>
                <button onClick={()=>{
                    const sortList=listOfRestaurant.filter((rest) => (rest.info.avgRating > 4.5))
                    setListofRestaurant(sortList)
                }}>Filter top Resturants</button>
            </div>
            <div className="rest-container">
                {filterRestaurent?.map(res=>(
                    <Link to={`/restaurant/${res.info.id}`} key={res.info.id}><Resturantcard resobj={res}/></Link>
                ))}
            </div>
        </div>
    )
}

export default Body;