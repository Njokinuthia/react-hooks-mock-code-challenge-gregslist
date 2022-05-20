import React , {useState} from "react";

function ListingCard({id, description , image, location,deleteItem}) {
  const [favourite , setFavourite] = useState(false)

  function handleDelete(){
    fetch('http://localhost:6001/listings',{ method:"DELETE"})
    deleteItem(id)
  }


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
        <button className="emoji-button delete"
        onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
