import { useParams } from 'react-router';
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';
const RestaurantMenu = () => {
  const [item,setItem]=useState(null)
  const { resid }=useParams();
  const resInfo=useRestaurantMenu(resid);
  const {name,cuisines,costForTwoMessage}=resInfo?.data.cards[2]?.card?.card?.info || {};
  const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  const handleItem=(index)=>{
    item===index ? setItem(null) : setItem(index)
  }
  return (
    <div className='text-center'>
        <h1 className='font-bold my-8 text-2xl'>{name}</h1>
        <h3>{cuisines?.join(", ")} - {costForTwoMessage}</h3>
        {
          categories?.map((category,index)=>(
            <RestaurantCategory key={category.card.card.categoryId} category={category?.card?.card} item={item === index ? true : false} setItem={()=>handleItem(index)}/>
          ))
        } 
    </div>
  )
}
export default RestaurantMenu