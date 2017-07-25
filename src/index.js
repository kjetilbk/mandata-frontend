import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/flexboxgrid/css/flexboxgrid.min.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
