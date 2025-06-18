import { CDN_URL } from "../utils/constants";
const ItemList = ({item}) => {
    console.log(item)
  return (
    <div>
        {item.map(item=>(
            <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex">
                <div className="flex-2/3">
                    <div className="py-3 font-bold flex flex-col gap-3">
                        <span>{item.card.info.name}</span>
                        <span> ₹{item.card.info.price /100}</span>
                    </div>
                    <div className="flex-1/3">
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <img src={CDN_URL + item.card.info.imageId} className="w-40 rounded-2xl"/>
                    <button className="bg-white align-middle w-20 rounded-b-sm absolute bottom-0.5 left-10">Add +</button>
                </div>
            </div>
        ))}
    </div>  
  ) 
}

export default ItemList;