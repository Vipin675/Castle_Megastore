import { USER_ACTION_TYPES } from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
};

//  USER REDUCER-----------
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      // default has changed into the "state" because unlike using useReducers in useContext dispatch(action) will dispatch all the state (where in context the distach happen only to the component we want but in redux dispatch will happen to the whole component so the we want their state to remain the same as before)
      return state;
  }
};
