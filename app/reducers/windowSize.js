import {Map} from 'immutable';

const SIZE_SMALL_WIDTH = 768;
const SIZE_MEDIUM_WIDTH = 1024;
const SIZE_SMALL_HEIGHT = 650;
const SIZE_MEDIUM_HEIGHT = 910;

export const WINDOW_SIZE_CHANGE = 'WINDOW_SIZE_CHANGE';
export const onChange = (state, {width, height}) => state
  .merge({
    isInitial: false,
    width,
    height,
    isSmallWidth: width <= SIZE_SMALL_WIDTH,
    isMediumWidth: width > SIZE_SMALL_WIDTH && width <= SIZE_MEDIUM_WIDTH,
    isLargeWidth: width > SIZE_MEDIUM_WIDTH,
    isSmallHeight: height <= SIZE_SMALL_HEIGHT,
    isMediumHeight: height > SIZE_SMALL_HEIGHT && height <= SIZE_MEDIUM_HEIGHT,
    isLargeHeight: height > SIZE_MEDIUM_HEIGHT
  });

const initialState = Map({
  width: -1,
  height: -1,
  isSmallWidth: false,
  isMediumWidth: false,
  isLargeWidth: false,
  isSmallHeight: false,
  isMediumHeight: false,
  isLargeHeight: false,
  isInitial: true
});

export const windowSize = (state = initialState, {type, ...action}) => {
  switch (type) {
    case WINDOW_SIZE_CHANGE:
      return onChange(state, action);
    default:
      return state;
  }
};
