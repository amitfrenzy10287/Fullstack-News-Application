import * as actionTypes from '../actions/actionTypes';

const initialState = {
  news: 0,
  message: '',
  loading: false,
};

const gelAllNews = (state, action) => {
  const data = {
    loading: false,
    news: action.news,
  };
  return {...state, ...data};

};

const fetchNewsFail = ( state, action ) => {
  return { ...state,...{ error: true, loading: false } };
};

const saveNews = (state, action) => {
  const data = {
    loading: false,
    news: action.news,
  };
  return {...state, ...data};
};

const deleteNews = (state, action) => {
  const data = {
    loading: false,
    news: action.news,
  };
  return {...state, ...data};
};

const saveNewsFail = ( state, action ) => {
  return { ...state,...{ error: true, loading: false } };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_ALL_NEWS: return gelAllNews(state, action);
    case actionTypes.DELETE_NEWS: return gelAllNews(state, action);
    default:
      return state;
  }
};

export default reducer;
