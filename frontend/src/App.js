import "./App.css";
import React, { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input } from "reactstrap";


// For using reactstrap components, use
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};


const App = () => {

  

  // Initialise une constante apparelList avec la valeur []
  // Nous donne accès à une méthode setApparelList pour modi
  const [apparelList, setApparelList] = useState([]);
  useEffect(() => {
    axios.get("/api/apparels/").then((res) => {
      setApparelList(res.data);});}, []);
  const apparelOptions = apparelList.map((apparel) => {
    return <option 
      value={apparel.name}
    >{apparel.name}</option>;
  });

  const [priceRangeList, setPriceRangeList] = useState([]);
  useEffect(() => {
    axios.get("/api/price-ranges/").then((res) => {
      setPriceRangeList(res.data);});}, []);
  const priceRangeOptions = priceRangeList.map((priceRange) => {
    return <option 
      value={priceRange.label}
    >{priceRange.label}</option>;
  });


  return (
    <div>
      <div className="App" style={styles.container}>
        <Form>
          <FormGroup>
            <Label for="apparelSelect">Choisir un vêtement</Label>
            <Input type="select" name="apparelSelect" id="apparelSelect">
              {apparelOptions}
            </Input>
          </FormGroup>
        </Form>
      </div>
      <div className="App" style={styles.container}>
      <Form>
        <FormGroup>
          <Label for="priceRangeSelect">Choisir un prix</Label>
          <Input type="select" name="priceRangeSelect" id="priceRangeSelect">
            {priceRangeOptions}
          </Input>
        </FormGroup>
      </Form>
    </div>
  </div>
  );
};
export default App;
