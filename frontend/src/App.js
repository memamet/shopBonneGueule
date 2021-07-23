import "./App.css";
import React, { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from "reactstrap";


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


  const [brandList, setBrandList] = useState([]);
  useEffect(() => {
    axios.get("/api/brands/").then((res) => {
      setBrandList(res.data);});}, []);
      
  const brandOptions = brandList.map((brand) => {
    return <option 
      value={brand.name}
    >{brand.name}</option>;
  });


  const brandCards = brandList.map((brand) => {
    return  <CardBody>
    <CardTitle value={brand.name}>{brand.name}</CardTitle>
    
    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
    <Button>Voir le site</Button>
    </CardBody>
  })


  return (
  
    <div className="App" style={styles.container}>
      <Form>
        <FormGroup>
          <Label for="apparelSelect">Choisir un vêtement</Label>
          <Input type="select" name="apparelSelect" id="apparelSelect">
            {apparelOptions}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="priceRangeSelect">Choisir un prix</Label>
          <Input type="select" name="priceRangeSelect" id="priceRangeSelect">
            {priceRangeOptions}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="brandSelect">Voici les marques recommandées</Label>
          <Input type="select" name="brandSelect" id="brandSelect">
            {brandOptions}
          </Input>
        </FormGroup>
      </Form>
      <Card>          
        {brandCards}
      </Card>
      
    </div>
    

  );
};
export default App;
