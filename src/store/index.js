import {createStore, combineReducers} from 'redux';
import {types} from '../actions/action.js';

export const initialState = {
  sign: false
}

let reducers = combineReducers({
  onSignIn,
  onSignOut
});

let store = createStore(reducers);


function onSignIn(state = initialState, action) {
  console.log('yaaaaaaaaaaaaaa');
  switch(action.type) {
    case types.ONSIGNIN: 
      state.sign = true;
      return { ...state};
    default:
      return {state};
  }
}

function onSignOut(state = initialState, action) {
  switch(action.type) {
    case types.ONSIGNOUT:
      state.sign = false;
      return { ...state};
    default:
      return {state};
  }
}

export default store;