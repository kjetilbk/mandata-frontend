import {initialize, set, pageview} from 'react-ga';

const initializeGoogleAnalytics = id => initialize(id);

export const logPageView = page => {
  set({page: page});
  pageview(page);
};

initializeGoogleAnalytics('UA-54548238-4');
