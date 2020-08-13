
import axios from 'axios';
import {createMessage, returnErrors} from './messages'

import { GET_LEADS , DELETE_LEAD, ADD_LEAD} from './types';

// GET LEADS
export const getLeads = () => (dispatch,getState) => {

  

    //  Get token from state
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    // If token, add to headers config
    if(token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  
  

  axios
    .get("/api/leads/", config)
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

// Delete LEADS
export const deleteLead = (id) => (dispatch,getState) => {

  
    //  Get token from state
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    // If token, add to headers config
    if(token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  

  axios
    .delete(`/api/leads/${id}/`, config)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted"}))
      dispatch({
        type: DELETE_LEAD, 
        payload: id
      });
    }) 
    .catch(err => console.log(err))
};

// ADD LEADS
export const addLead = lead => (dispatch,getState) => {

  
    //  Get token from state
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    // If token, add to headers config
    if(token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  


  axios
    .post("/api/leads/", lead, config)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added"}))
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
      // dispatch(returnErrors(err.response.data, err.response.status)))
};