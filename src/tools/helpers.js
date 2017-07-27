export const formatProbability = probability => parseFloat((probability*100).toFixed(2));
export const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;
