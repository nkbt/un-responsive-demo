import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Empty from '../containers/Empty';


export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Empty} />
      </Route>
    </Router>
  );
};
