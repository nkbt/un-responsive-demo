import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'

import configureStore from 'store/configureStore'
import createRoutes from 'routes/index'
import {Provider} from 'react-redux'


const store = configureStore(JSON.parse(unescape(window.__REDUX_STATE__)));


ReactDOM.render((
  <Provider store={store}>
    { createRoutes(browserHistory) }
  </Provider>
), document.getElementById('root'))
