import * as types from "../constants/types";

const intialState = {
  isFetching: false,
  error: false,
  errorMessage: "",
  isConnected: true,
  uploading: false
};

const offlineReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.FETCHING_REQUEST:
      return { ...state, isFetching: true };

    case types.FETCHING_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };

    case types.FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false
      };

    case types.FETCHING_UPLOAD_REQUEST:
      return {
        ...state,
        isFetching: true,
        uploading: true
      };

    case types.FETCHING_UPLOAD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        uploading: false
      };

    case types.FETCHING_UPLOAD_FAILURE:
      return {
        ...state,
        isFetching: false,
        uploading: false
      };

    case types.CHANGE_CONNECTION: {
      return { ...state, isConnected: action.flag };
    }

    case types.CANCEL:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};

export default offlineReducer;
