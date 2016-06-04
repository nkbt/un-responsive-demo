import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Frame from '../containers/Frame';
import Responsive from '../containers/Responsive';
import Empty from '../containers/Empty';


export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="frame" component={Frame} />
        <Route path="responsive" component={Responsive} />
        <IndexRoute component={Empty} />
      </Route>
    </Router>
  );
};
