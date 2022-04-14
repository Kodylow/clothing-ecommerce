import React from "react";
import "../Categories/categories.styles.scss";

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div className="category-body-container">
      <img className="background-image" src={imageUrl} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
