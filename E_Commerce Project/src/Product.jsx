import React from "react";
// import productsCollection from "./ProductData";
import "./App.css";
const Product = (props) => {
    const clickHandler = (name)=>{
        console.log(name, "is the product that added to Cart");
    }
  const { name, price, description, imageUrl } = props;
  return (
    <div className="productsComponent">
      <article className="product" onMouseOver={()=>{console.log(name)}}>
        <img src={imageUrl} alt="" />
        <h4>{name}</h4>
        <h5>{price}</h5>
        <p>{description}</p>
        <button type="button" onClick={()=>clickHandler(name)}>Add cart</button>
      </article>
    </div>
  );
};
export default Product;
