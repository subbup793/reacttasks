import React, { useState, useEffect } from "react";
import HomePageComponent from "./home";
import "./App.css";
import ProductDisplayPage from "./ProductDisplayPage";

function App() {
  return (
    <React.Fragment>
      <HomePageComponent />
      <ProductDisplayPage /> 
    </React.Fragment>
  );
}

export default App;
