import { combineReducers } from 'redux';
import {
  FETCH_ALTERNATIVE_SUPPORT,
  FETCH_HISTORIC_SUPPORT,
  FETCH_SPERREGRENSE_CHANCES,
  FETCH_HISTORIC_SPERREGRENSE,
  UPDATE_WINDOW_DIMENSIONS,
  UPDATE_COALITION_DATE_LABEL,
  UPDATE_SPERREGRENSE_DATE_LABEL
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

const sperregrenseReducer = (state = {mdg: -1, v: -1, sv: -1, r: -1, krf: -1}, action) => {
  switch (action.type) {
    case FETCH_SPERREGRENSE_CHANCES:
      return action.sperregrenseChances;
    default:
      return state;
  }
};

const historicSperregrenseReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_HISTORIC_SPERREGRENSE:
      return action.historicChances;
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

const dateLabelReducer = (state = {coalition: "", sperregrense: ""}, action) => {
  switch (action.type) {
    case UPDATE_COALITION_DATE_LABEL:
      return Object.assign({}, state, {coalition: action.dateLabel});
    case UPDATE_SPERREGRENSE_DATE_LABEL:
      return Object.assign({}, state, {sperregrense: action.dateLabel});
    default:
      return state;
  }
};

export default combineReducers({
  alternativeSupport: alternativeSupportReducer,
  historicSupport: historicSupportReducer,
  sperregrenseChances: sperregrenseReducer,
  historicChances: historicSperregrenseReducer,
  windowDimensions: windowDimensionReducer,
  dateLabel: dateLabelReducer
});
