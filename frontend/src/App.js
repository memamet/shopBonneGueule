import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [apparelList, setApparelList] = useState([]);
  const [priceRangeList, setPriceRangeList] = useState([]);



  useEffect(() => {
    axios.get("/api/apparels/").then((res) => setApparelList(res.data));
    axios.get("/api/price-ranges/").then((res) => setPriceRangeList(res.data));
  }, []);

  const apparelOptions = apparelList.map((apparel) => {
    return <option value={apparel.name}>{apparel.name}</option>;
  });
  const priceRangeOptions = priceRangeList.map((priceRange) => {
    return <option value = {priceRange.label}>{priceRange.label}</option>
  });
  return (
    <div className="App">
      <select>{apparelOptions}</select>
      <select>{priceRangeOptions}</select>
    </div>
  );
};

export default App;
