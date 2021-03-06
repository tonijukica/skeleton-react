import { actionTypes } from '../actions/userActions';
export const userInitialState = {
  id: null,
  username: null,
  loggedIn: false,
  isLoading: false,
  error: false,
  errorMsg: '',
  redirect: false
}

export const userReducer = (state = userInitialState, action) => {
  switch(action.type){
    case(actionTypes.SET_USER):
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        loggedIn: true,
        isLoading: false
      };
    case(actionTypes.REMOVE_USER):
      return {
        ...state,
        id: null,
        username: null,
        loggedIn: false
      };
    case(actionTypes.LOADING_USER):
      return {
        ...state,
        isLoading: true
      }
    case(actionTypes.SET_ERROR):
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMsg: action.payload
      }
    case(actionTypes.CLEAR_ERROR):
      return {
        ...state,
        error: false,
        errorMsg: '',
        redirect: false
      }
    case(actionTypes.REDIRECT):
      return {
        ...state,
        redirect: true
      }
    default:
      return state;
  }
}