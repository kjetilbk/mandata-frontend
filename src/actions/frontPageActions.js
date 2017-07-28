export const FETCH_ALTERNATIVE_SUPPORT = 'FETCH_ALTERNATIVE_SUPPORT';
export const FETCH_HISTORIC_SUPPORT = 'FETCH_HISTORIC_SUPPORT';
export const FETCH_SPERREGRENSE_CHANCES = 'FETCH_SPERREGRENSE_CHANCES';
export const FETCH_HISTORIC_SPERREGRENSE = 'FETCH_HISTORIC_SPERREGRENSE';
export const UPDATE_WINDOW_DIMENSIONS = 'UPDATE_WINDOW_DIMENSIONS';
export const UPDATE_MOUSE_POSITION = 'UPDATE_MOUSE_POSITION';
export const UPDATE_DATE_LABEL = 'UPDATE_DATE_LABEL';

const apiBaseUrl = "http://api.mandata.no";

export function fetchAlternativeSupport() {
  return function (dispatch) {
    return fetch(`${apiBaseUrl}/utfall`)
      .then(response => response.json())
      .then(alternativeSupport => dispatch({
        type: FETCH_ALTERNATIVE_SUPPORT,
        alternativeSupport
      }));
  };
}

export function fetchHistoricSupport() {
  return function (dispatch) {
    return fetch(`${apiBaseUrl}/utfall?historic=1`)
      .then(response => response.json())
      .then(historicSupport => dispatch({
        type: FETCH_HISTORIC_SUPPORT,
        historicSupport
      }));
  };
}

export function fetchSperregrenseChances() {
  return function (dispatch) {
    return fetch(`${apiBaseUrl}/sperregrense`)
      .then(response => response.json())
      .then(sperregrenseChances => dispatch({
        type: FETCH_SPERREGRENSE_CHANCES,
        sperregrenseChances
      }));
  };
}

export function fetchHistoricChances() {
  return function (dispatch) {
    return fetch(`${apiBaseUrl}/sperregrense?historic=1`)
      .then(response => response.json())
      .then(historicChances => dispatch({
        type: FETCH_HISTORIC_SPERREGRENSE,
        historicChances
      }));
  };
}

export function updateWindowHeightAndWidth(width, height) {
  return {
    type: UPDATE_WINDOW_DIMENSIONS,
    width,
    height
  };
};

export function updateMouseXandY(x, y) {
  return {
    type: UPDATE_MOUSE_POSITION,
    x,
    y
  };
};

export function updateDateLabel(dateLabel) {
  return {
    type: UPDATE_DATE_LABEL,
    dateLabel
  };
};
