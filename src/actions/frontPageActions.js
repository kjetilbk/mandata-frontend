export const FETCH_NYDALEN_SUPPORT = 'FETCH_NYDALEN_SUPPORT';

const apiBaseUrl = "http://api.mandata.no";

export function fetchNydalenSupport() {
  return function (dispatch) {
    return fetch(`${apiBaseUrl}/utfall/nydalen`)
      .then(response => response.json())
      .then(nydalenSupport => dispatch({
        type: FETCH_NYDALEN_SUPPORT,
        nydalenSupport
      }));
  };
}
