import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App />, document.getElementById('container'));
registerServiceWorker();
