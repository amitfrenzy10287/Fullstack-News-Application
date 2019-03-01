import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authdata: null,
  token:null,
  loading: false,
  errorLogin:''
};

const loginSuccess = (state, action) => {
  const data = {
    loading: false,
    token:action.authdata.token,
    authdata:action.authdata.response,
  };
  return {...state, ...data};
};

const loginFailed = ( state, action ) => {
  return { ...state,...{ error: true, loading: false ,errorLogin : action.error} };
};

const logout = ( state, action ) => {
  return { ...state,...{ authdata: null, token: null } };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.FETCH_USER_SUCCESS: return loginSuccess(state, action);
    case actionTypes.FETCH_USER_FAIL: return loginFailed(state, action);
    case actionTypes.AUTH_INITIATE_LOGOUT: return logout(state, action);
    default:
      return state;
  }
};

export default reducer;
