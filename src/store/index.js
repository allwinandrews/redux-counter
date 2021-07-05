import { createSlice, configureStore } from "@reduxjs/toolkit";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const INCREASE = "increase";
export const TOGGLE = "toggle";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

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
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
