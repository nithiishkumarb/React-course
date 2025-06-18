import { useState } from "react"
import ItemList from "./ItemList"
const RestaurantCategory = ({category,item,setItem}) => {
    const {title,itemCards}=category
    const handleClick=()=>{
      setItem();
    }
  return (
    <div>
        <div className="w-6/12 m-auto my-5 bg-gray-50 shadow-lg p-4  cursor-pointer">
        <div className="flex justify-between cursor-pointer" onClick={()=>handleClick()}>
            <span className="text-lg font-bold">{title} ({itemCards.length})</span>
            <span>🔽</span>
        </div>
        {
          item && <div>
          <ItemList item={itemCards}/>
        </div>
        }
        
        </div>
    </div>
  )
}

export default RestaurantCategory