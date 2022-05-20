import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(resp => resp.json())
      .then(data => setItemsList(data))
  }, [])

  function deleteItem(id) {
    console.log(id)
    const afterDeleteList = itemsList.filter(item => item.id !== id)
    setItemsList(afterDeleteList)
  }

  
    const searchItemDisplay = itemsList.filter(item=>item.description.toLowerCase() === search.toLowerCase())
  

  return (
    <div className="app">
      <Header handleSearch={setSearch} />
      <ListingsContainer itemsList={search===""?itemsList:searchItemDisplay} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
