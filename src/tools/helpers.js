export const formatProbability = (probability, decimals=2) => parseFloat((probability*100).toFixed(decimals));
export const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;
export const removeSpacesAndDashesFromString = str => str.replace(/-/g, "").replace(/ /g,'');
