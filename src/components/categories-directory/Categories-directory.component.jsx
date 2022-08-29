import React from "react";
import CategoryDirectoryItem from "../category-item/Category-directory-item.component";
import "./categories-directory.styles.scss";

const CategoriesDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryDirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoriesDirectory;
