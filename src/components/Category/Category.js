import React from "react";

const Category = (props) => {
  const { name, category } = props.product;
  return (
    <div>
      <h6>Product name: {name} </h6>
      <h6>Product category: {category}</h6>
    </div>
  );
};

export default Category;
