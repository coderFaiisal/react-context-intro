import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CategoryContext } from "../../App";
import Category from "../Category/Category";

const allProducts = [
  { name: "lenovo", category: "laptop" },
  { name: "hp", category: "laptop" },
  { name: "dell", category: "laptop" },
  { name: "apple", category: "mobile" },
  { name: "samsung", category: "mobile" },
  { name: "xioami", category: "mobile" },
  { name: "canon", category: "camera" },
  { name: "nikkon", category: "camera" },
  { name: "sony", category: "camera" },
];

const Shipment = () => {
  const [category, setCategory] = useContext(CategoryContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const matchedProduct = allProducts.filter((pd) => pd.category === category);
    setProducts(matchedProduct);
  }, [category]);
  return (
    <div>
      <h4>This is shipment: {category} </h4>
      {products.map((product) => (
        <Category product={product}></Category>
      ))}
    </div>
  );
};

export default Shipment;
