// The selector file is where this reducer specific transformation business logic is going to live.
export const selectCategoriesMap = (state) =>
  state.categories.categories.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});
