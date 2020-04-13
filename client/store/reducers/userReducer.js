import { actionTypes } from '../actions/userActions';
export const userInitialState = {
  id: null,
  loggedIn: false,
  isLoading: false,
  error: false
}

export const userReducer = (state = userInitialState, action) => {
  switch(action.type){
    case(actionTypes.SET_USER):
      return {
        ...state,
        id: action.payload,
        loggedIn: true,
        isLoading: false
      };
    case(actionTypes.REMOVE_USER):
      return {
        ...state,
        id: null,
        loggedIn: false
      };
    case(actionTypes.LOADING_USER):
      return {
        ...state,
        isLoading: true
      }
    default:
      return state;
  }
}