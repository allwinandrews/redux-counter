import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// export const INCREMENT = "increment";
// export const DECREMENT = "decrement";
// export const INCREASE = "increase";
// export const TOGGLE = "toggle";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return { ...state, counter: state.counter + 1 };
//   }

//   if (action.type === DECREMENT) {
//     return { ...state, counter: state.counter - 1 };
//   }

//   if (action.type === INCREASE) {
//     return { ...state, counter: state.counter + action.amount };
//   }

//   if (action.type === TOGGLE) {
//     return { ...state, showCounter: !state.showCounter };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
