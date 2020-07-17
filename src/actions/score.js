import {DISPLAY_SCORE, EMPTY_SCORE} from "../constants/types";

export const addScore = (score) => ({
    type: DISPLAY_SCORE,
    data: score
});

export const emptyScore = () => ({
    type: EMPTY_SCORE,
    data: 0
});