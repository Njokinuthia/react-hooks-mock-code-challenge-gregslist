import React , {useState} from "react";

function ListingCard({description , image, location}) {
  const [favourite , setFavourite] = useState(false)
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favourite ? (
          <button className="emoji-button favorite active" 
          onClick={()=>setFavourite(false)}>★</button>
        ) : (
          <button className="emoji-button favorite"
          onClick={()=>setFavourite(true)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
