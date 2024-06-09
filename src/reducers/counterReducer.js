// Action => Action to take (Like Increment, Decrement)
// Reducer => It is a function that take previus state and action and return the new state
// Dispatch => Call the reducer function with action type and tell them to perform the specific action
// Store => State

export const initialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
