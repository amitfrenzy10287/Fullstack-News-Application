import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchUserSuccess = (authdata) => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    authdata,
  };
};

export const fetchUserFail = (error) => {
  return {
    type: actionTypes.FETCH_USER_FAIL,
    error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT
  };
};

export const userLogin =( userdata )=>{
	const username = userdata.username ? userdata.username :'';
	const password = userdata.password ? userdata.password: '';
	return dispatch => {

	const url = `http://localhost:8080/user/login?username=${username}&password=${password}`;
    var config = {
	  headers: {
	  	'Content-Type': 'application/json',
		}
	};
	axios.get(url, config).then(resp => { 
		return resp.data
	})
      .then( res => {
      	if(res.error){
      		dispatch(fetchUserFail(res.error));
      	}else{
      		dispatch(fetchUserSuccess(res));	
      	}
      } )
      .catch( err => {
        dispatch(fetchUserFail(err));
      } );
  };
};
