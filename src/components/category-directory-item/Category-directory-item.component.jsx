import React from "react";
import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  CategoryDirectoryItemContainer,
  Body,
} from "./category-directory-item.styles";

const CategoryDirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(category.route);
  return (
    <CategoryDirectoryItemContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryDirectoryItemContainer>
  );
};

export default CategoryDirectoryItem;
