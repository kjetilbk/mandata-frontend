import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'flexboxgrid'
import 'whatwg-fetch';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
