//set action creator and action type for logging in
export const TARGETSCORE = "TARGETSCORE";

const getTargetScore = targetScore => ({
  type: TARGETSCORE,
  payload: targetScore
});

export const setTargetScore= (targetscore) => {
    return function (dispatch) {
        return dispatch(getTargetScore(targetscore))
    }
}


