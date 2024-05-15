import * as types from "./actionTypes" 

let initialState = {
     list: [], isLoading: false, isError: false
  };
  const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.GET_RESTAURANTS_LIST_REQUEST:
        return {
            ...state,
            isLoading: true,
            isError: false,
          };
      case types.GET_RESTAURANTS_LIST_SUCCESS:
        // payload itself is an object so we  have to spread it also along with the list
        return {
            ...state,
            list:payload,
            isLoading: false,
            isError: false,
          };
      case types.GET_RESTAURANTS_LIST_FAILURE:
        return {
            ...state,
            isLoading: false,
            isError: true,
          };
      default:
        return state;
    }
  };
  
  export {reducer};