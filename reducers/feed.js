const initialState = [];

export const feed = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FEED':
      return action.payload;
    default:
      return state;
  }
}
