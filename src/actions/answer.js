//set action creator and action type for logging in
export const ANSWER = "ANSWER";

const getAnswer = answer => ({
  type: ANSWER,
  payload: answer
});

export const setAnswer = (answer) => {
    return function (dispatch) {
        return dispatch(getAnswer(answer))
    }
}


