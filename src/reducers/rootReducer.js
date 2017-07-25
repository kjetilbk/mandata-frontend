import { combineReducers } from 'redux';
import {
  FETCH_NYDALEN_SUPPORT
} from '../actions/frontPageActions';

const nydalenSupportReducer = (state = -1, action) => {
  switch (action.type) {
    case FETCH_NYDALEN_SUPPORT:
      return action.nydalenSupport;
    default:
      return state;
  }
};

export default combineReducers({
  nydalenSupport: nydalenSupportReducer
});
