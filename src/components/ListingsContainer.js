import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ itemsList, deleteItem }) {
  console.log(itemsList);
  const itemList = itemsList.map(item => {
    // console.log(item);
    return (
      <ListingCard
        key={item.id}
        description={item.description}
        image={item.image}
        location={item.location}
        deleteItem={deleteItem}
        id={item.id}
      />
    )
  })



  return (
    <main>
      <ul className="cards">
        {itemList}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
