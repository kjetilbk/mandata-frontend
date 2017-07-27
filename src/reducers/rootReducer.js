import { combineReducers } from 'redux';
import {
  FETCH_ALTERNATIVE_SUPPORT,
  FETCH_HISTORIC_SUPPORT,
  UPDATE_WINDOW_DIMENSIONS
} from '../actions/frontPageActions';

const alternativeSupportReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALTERNATIVE_SUPPORT:
      return action.alternativeSupport;
    default:
      return state;
  }
};

const historicSupportReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_HISTORIC_SUPPORT:
      return action.historicSupport;
    default:
      return state;
  }
};

const windowDimensionReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_WINDOW_DIMENSIONS:
      return {
        width: action.width,
        height: action.height
      };
    default:
      return state;
  }
};

export default combineReducers({
  alternativeSupport: alternativeSupportReducer,
  historicSupport: historicSupportReducer,
  windowDimensions: windowDimensionReducer
});
