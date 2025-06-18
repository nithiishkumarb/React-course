import { CDN_URL } from "../utils/constants";
const Resturantcard=(props)=>{
    const {resobj}=props;
    const {name,avgRating,sla,cloudinaryImageId,cuisines}=resobj?.info || {};
    return(
        <div className="w-60 bg-gray-200 m-4 p-4 rounded-lg">
            <img className="" alt="rest-logo" src={CDN_URL+ cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export const WithLabel=(ResturantCard)=>{
    return (props)=>{
        return(
            <div>
                <label>Promoted</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}
export default Resturantcard;