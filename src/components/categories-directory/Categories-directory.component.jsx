import React from "react";
import CategoryItem from "../category-item/Category-item.component";
import "./categories-directory.scss";

const CategoriesDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoriesDirectory;
