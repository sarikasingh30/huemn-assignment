import * as types from "./actionTypes";
const getRestaurantsListRequest = () => {
  return { type: types.GET_RESTAURANTS_LIST_REQUEST };
};
const getRestaurantsListSuccess = (payload) => {
  return { type: types.GET_RESTAURANTS_LIST_SUCCESS, payload };
};
const getRestaurantsListFailure = () => {
  return { type: types.GET_RESTAURANTS_LIST_FAILURE };
};
export {
  getRestaurantsListRequest,
  getRestaurantsListSuccess,
  getRestaurantsListFailure,
};
