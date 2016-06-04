import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'

import configureStore from 'store/configureStore'
import createRoutes from 'routes/index'
import {Provider} from 'react-redux'


const store = configureStore(JSON.parse(unescape(window.__REDUX_STATE__)));


import {subscribe as windowSize, getSize} from './lib/windowSize';
import {WINDOW_SIZE_CHANGE} from './lib/windowSize/reducer';

const AppWrap = React.createClass({
  componentDidMount() {
    store.dispatch({type: WINDOW_SIZE_CHANGE, ...getSize()});
    this.unsubscribeWindowsSize = windowSize({store});
  },

  componentWillUnmount() {
    this.unsubscribeWindowsSize();
  },

  render() {
    return (
      <Provider store={store}>
        { createRoutes(browserHistory) }
      </Provider>
    );
  }
});

ReactDOM.render(<AppWrap />, document.getElementById('root'));
