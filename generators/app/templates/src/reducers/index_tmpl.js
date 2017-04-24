import { combineReducers } from 'redux';
import {TEST_ACTION} from '../actions';
import { routerReducer } from 'react-router-redux';



function Test(state = {}, action) {
  switch (action.type) {
    case TEST_ACTION:
      return Object.assign({}, state,action['content']);
    default:
      return state
  }
}


const rootReducer = combineReducers({
  routing: routerReducer,
  test: Test
});

export default rootReducer;
