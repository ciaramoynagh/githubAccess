import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

/* this code is adapted from a Hackernoon tutorial https://medium.com/hackernoon/building-github-profile-analytics-using-react-part-1-37e03b0c3366 */
