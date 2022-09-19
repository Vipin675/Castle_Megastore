import { createSelector } from "reselect";

const selectCategoriesMapReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesMapReducer], // first argment is the item you want to store as memoized
  (categoriesSlice) => categoriesSlice.categories // this will run only when the item get from useSelect is update or changed else the memoized item will passed
);

// The selector file is where this reducer specific transformation business logic is going to live.
export const selectCategoriesMap = createSelector(
  [selectCategories],

  (categories) =>
    categories.reduce((accumulator, docSnapshot) => {
      const { title, items } = docSnapshot;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {})
);
