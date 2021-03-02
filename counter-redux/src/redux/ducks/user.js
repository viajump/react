export const GET_USER = "get_user";
const SET_USER = "set_user";

export const getUser = () => ({
  type: GET_USER,
});

export const setUser = (user) => ({
  type: SET_USER,
  user
});

const intialState = {
  user: undefined
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action
      return { ...state, user };
    default:
      return state;
  }
};

export default userReducer;