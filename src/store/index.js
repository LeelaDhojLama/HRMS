import {createStore, combineReducers} from 'redux';
import {types} from '../actions/action.js';

export const initialState = {
  userName: 'Visitor',
  sign: false 
};

function sign(state = initialState, action) {
  switch(action.type) {
    case 'ONSIGNIN': 
      return {
        userName: action.userName,
        sign: true
      }
      case 'ONSIGNOUT':
      return {
        userName: 'Visitor',
        sign: false
      }
    default:
      return state;
  }
}

let store = createStore(sign);

export default store;