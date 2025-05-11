import { CDN_URL } from "../utils/constants";
const Resturantcard=(props)=>{
    const {resobj}=props;
    const {name,avgRating,sla,cloudinaryImageId,cuisines}=resobj?.info || {};
    return(
        <div className="res-card">
            <img className="rest-logo" alt="rest-logo" src={CDN_URL+ cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}
export default Resturantcard;