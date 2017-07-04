const initialState = null;

export const login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}
