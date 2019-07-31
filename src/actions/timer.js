export const TIMER = "TIMER";

const startTime = time => ({
  type: TIMER,
  payload: time
});

export const setTime = timer => {
  return function(dispatch) {
    return dispatch(startTime(timer));
  };
};

export const TIMEROFF = "TIMEROFF";

const stopTime = time => ({
  type: TIMER,
  payload: time
});

export const setTime2 = timer => {
  return function(dispatch) {
    return dispatch(stopTime(timer));
  };
};
