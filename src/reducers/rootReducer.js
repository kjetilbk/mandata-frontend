import { combineReducers } from 'redux';
import {
  FETCH_ALTERNATIVE_SUPPORT
} from '../actions/frontPageActions';

const alternativeSupportReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALTERNATIVE_SUPPORT:
      return action.alternativeSupport;
    default:
      return state;
  }
};

export default combineReducers({
  alternativeSupport: alternativeSupportReducer
});
