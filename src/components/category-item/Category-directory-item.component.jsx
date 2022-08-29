import "./category-directory-item.styles.scss";
import React from "react";

const CategoryDirectoryItem = ({ category }) => {
  return (
    <div className="category-directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-directory-item-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryDirectoryItem;
