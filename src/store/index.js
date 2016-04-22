import {createStore, combineReducers} from 'redux';
import {types} from '../actions/action.js';

export const initialState = {
  userName: 'Visitor',
  sign: false ,
  asideState: 0
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
        sign: false,
        asideState: 0
      }
    default:
      return state;
  }
}

function asideButton(state = initialState, action) {
  switch(action.type) {
    case 'ONSIGNOUT':
      return {
        asideState: 0
      }
    case 'ONCLOCKINOUT':
      return {
        asideState: 1
      }
      case 'ONLEAVE':
        return {
          asideState: 2
      }
      case 'ONOVERTIME':
        return {
          asideState: 3
      }
      case 'ONSTAREPORT':
        return {
          asideState: 4
      }
    default:
      return state;
  }
}

let reducers = combineReducers({
  sign,
  asideButton
})

let store = createStore(reducers);

export default store;