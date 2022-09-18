import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const CATEGORY_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducers = (
  state = CATEGORY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    // return { ...state,  payload }; --- before i was using this that cause me problem that instead of updating the categoriesMap state becomes like
    //  {
    //    categoriesMap: {} ,
    //    payload: {stored all the categories in it instead of in categoriesMap(that cause it to be remain blank)}
    //  }
    default:
      return state;
  }
};
