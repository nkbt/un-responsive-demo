export const WINDOW_SIZE_CHANGE = 'WINDOW_SIZE_CHANGE';
export const onChange = (state, {width, height}) => ({
  ...state,
  isInitial: false,
  width,
  isSmall: width <= 768
});


const initialState = {
  width: -1,
  isSmall: false,
  isInitial: true
};


export const windowSize = (state = initialState, {type, ...action}) => {
  switch (type) {
    case WINDOW_SIZE_CHANGE:
      return onChange(state, action);
    default:
      return state;
  }
};
