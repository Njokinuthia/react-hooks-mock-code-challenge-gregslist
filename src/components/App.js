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

  return (
    <div className="app">
      <Header />
      <ListingsContainer itemsList={itemsList} />
    </div>
  );
}

export default App;
