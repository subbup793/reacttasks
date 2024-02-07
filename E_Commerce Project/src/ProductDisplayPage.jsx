/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {productsCollection} from "./ProductData";
import "./App.css";
import Product from './Product';
const ProductDisplayPage = () => {
  return <section className="productDisplayPage">
    {productsCollection.map((product,index)=>{
      return <Product {...product} key={index}/>
    })}
  </section>;
};
export default ProductDisplayPage;
