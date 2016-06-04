import {WINDOW_SIZE_CHANGE} from './reducer';
import {debounce} from 'lodash';
import shallowEqual from 'fbjs/lib/shallowEqual';


export const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});


export const subscribe = ({store, timeout = 50}) => {
  const onResize = () => {
    const newState = getSize();

    if (!shallowEqual(store.getState().windowSize, newState)) {
      store.dispatch({type: WINDOW_SIZE_CHANGE, ...newState});
    }
  };

  const onResizeDebounced = debounce(onResize, timeout);
  window.addEventListener('resize', onResizeDebounced);

  return () => {
    window.removeEventListener('resize', onResizeDebounced);
    onResizeDebounced.cancel();
  };
};
