export const SCORE = "SCORE";

const setScore = (score) => ({
  type: SCORE,
  payload: score
});

export const updateScore = (score) => dispatch => {
    dispatch(setScore(score))
};

