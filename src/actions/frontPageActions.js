export const FETCH_ALTERNATIVE_SUPPORT = 'FETCH_ALTERNATIVE_SUPPORT';

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
