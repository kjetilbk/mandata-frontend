export const FETCH_ALTERNATIVE_SUPPORT = 'FETCH_ALTERNATIVE_SUPPORT';
export const FETCH_HISTORIC_SUPPORT = 'FETCH_HISTORIC_SUPPORT';
export const UPDATE_WINDOW_DIMENSIONS = 'UPDATE_WINDOW_DIMENSIONS';

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

export function updateWindowHeightAndWidth(width, height) {
  return {
    type: UPDATE_WINDOW_DIMENSIONS,
    width,
    height
  };
};
