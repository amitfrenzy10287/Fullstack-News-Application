import * as actionTypes from './actionTypes';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const fetchNewsSuccess = (news) => {
  return {
    type: actionTypes.GET_ALL_NEWS,
    news,
  };
};

export const fetchNewsFail = () => {
  return {
    type: actionTypes.FETCH_NEWS_FAIL,
  };
};

export const saveNewsSuccess = (news) => {	
  return {
    type: actionTypes.SAVE_NEWS,
    news,
  };
};

export const saveNewsFail = () => {
  return {
    type: actionTypes.SAVE_NEWS_FAIL,
  };
};

export const getAllNews = (order) => {
  return dispatch => {
    const url = `http://localhost:8080/news/sortedNews/${order}`;
    const headers = {
      'Content-Type': 'application/json'
    };

    var config = {
	  headers: {
	  	'Content-Type': 'application/json'
		}
	};

	axios.get(url, config).then(resp => { return resp.data })
      .then( res => {
        dispatch(fetchNewsSuccess(res));
      } )
      .catch( err => {
        dispatch(fetchNewsFail(err));
      } );
  };
};

export const saveNewsItem =( newsItem )=>{
	return dispatch => { 
  const id = newsItem.newsId ? newsItem.newsId : 0;
	const access_token = newsItem.token ? newsItem.token : 0;
	const url = `http://localhost:8080/news/${id}`;
    var config = {
	  headers: {
	  	'Content-Type': 'application/json',
	  	'access_token':access_token 
		}
	};
  delete newsItem.token;
   
	if(id === 0){
		axios.post('http://localhost:8080/news', newsItem, config).then(resp => { return resp.data })
      .then( res => {
        dispatch(fetchNewsSuccess(res));
      } )
      .catch( err => {
        dispatch(fetchNewsFail(err));
      } );
	}else{
		axios.put(url, newsItem, config).then(resp => { return resp.data })
      .then( res => {
        dispatch(fetchNewsSuccess(res));
      } )
      .catch( err => {
        dispatch(fetchNewsFail(err));
      } );
	}
	
  };
};

export const deleteNewsItem =( newsId )=>{
	return dispatch => {
	const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6MSwiZmlyc3RuYW1lIjoiQW1pdCIsImxhc3RuYW1lIjoiVXBhZGh5YXkiLCJlbWFpbCI6ImFtaXRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJhbWl0dXBhZGh5YXkiLCJwYXNzd29yZCI6IkFtaXRAMTIzIiwidXNlcl90eXBlIjoiYWRtaW4iLCJjcmVhdGVkX2F0IjoiMjAxOC0xMi0yM1QxMTo0MjoxNC4wMDBaIn1dLCJpYXQiOjE1NTEwODgyNDgsImV4cCI6MTU1MzY4MDI0OH0.H_nQWiEwjAUAeFndqxzsGbVLhtPDJWXL_qvzXEaxtXg';
    const url = `http://localhost:8080/news/${newsId}`;
    var config = {
	  headers: {
	  	'Content-Type': 'application/json',
	  	'access_token':access_token 
		}
	};
	axios.delete(url, config).then(resp => { return resp.data })
      .then( res => {
        dispatch(fetchNewsSuccess(res));
      } )
      .catch( err => {
        dispatch(fetchNewsFail(err));
      } );
  };
};