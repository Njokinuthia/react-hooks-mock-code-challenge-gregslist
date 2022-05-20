import React, { useEffect , useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemsList , setItemsList] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(resp=>resp.json())
    .then(data=>setItemsList(data))
  },[])  

  function deleteItem(id){
    console.log(id)
    const afterDeleteList =itemsList.filter(item =>item.id !== id)
    setItemsList(afterDeleteList)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer itemsList={itemsList} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
