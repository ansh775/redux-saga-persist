import { ADDS, GETS, REMOVE } from "./type";

let initialState = {
  data: [],
  get: [],
};
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDS:
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case GETS:
      return {
        ...state,
        get: action.data,
      };
    case REMOVE:
      return {
        ...state,
        data: state.data.filter((val) => val.value !== action.data),
      };
    //   return (initialState.data = [action.data, ...initialState.data]);
    default:
      return state;
  }
};
