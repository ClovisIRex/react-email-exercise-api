import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputTextComponent from './Input';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<InputTextComponent />, document.getElementById('root'));
registerServiceWorker();
