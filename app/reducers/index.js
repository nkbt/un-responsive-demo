import {combineReducers} from 'redux';
import {windowSize} from 'lib/windowSize/reducer';

const rootReducer = combineReducers({
  windowSize
});

export default rootReducer;
