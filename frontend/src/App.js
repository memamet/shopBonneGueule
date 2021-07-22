import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [apparelList, setApparelList] = useState([]);

  useEffect(() => {
    axios.get("/api/apparels/").then((res) => {
      setApparelList(res.data);
    });
  }, []);

  const apparelOptions = apparelList.map((apparel) => {
    return <option value={apparel.name}>{apparel.name}</option>;
  });

  return (
    <div className="App">
      <select>{apparelOptions}</select>
    </div>
  );
};

export default App;
