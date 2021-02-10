import { Types } from "../../chartsData/actions/index";

const initialState = {
  items: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

