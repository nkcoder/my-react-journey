const counterReducer = (state, action) => {
  const { count } = state;
  const { type, step } = action;
  console.log(state, action);
  switch (type) {
    case 'increment':
      return { ...state, count: count + step };
    case 'decrement':
      return { ...state, count: count - step };
    default:
      return state;
  }
};

export { counterReducer };
