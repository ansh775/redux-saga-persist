import { ADD, GET, REMOVE } from "./type";

export const addData = (data) => {
  return {
    type: ADD,
    data,
  };
};
export const removeData = (data) => {
  return {
    type: REMOVE,
    data,
  };
};
export const getData = (data) => {
  return {
    type: GET,
    data,
  };
};
