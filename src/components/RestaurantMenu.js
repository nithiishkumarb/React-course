import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { RES_URL } from '../utils/constants';
const RestaurantMenu = () => {
  const [resInfo,setresinfo]=useState();
  useEffect(()=>{
    fetchmenu();
  },[])
  const { resid }=useParams();
  console.log(resid);
  const fetchmenu=async()=>{
    const data = await fetch(RES_URL+resid);
    const json = await data.json();
    setresinfo(json);
  }
  const {name,cuisines,costForTwoMessage}=resInfo?.data.cards[2]?.card?.card?.info || {};
  const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card || {};
  
  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards?.map(item =>(
          <li key={item?.card.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice
/100}</li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu