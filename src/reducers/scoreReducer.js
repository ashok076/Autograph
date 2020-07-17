import {DISPLAY_SCORE, EMPTY_SCORE} from "../constants/types";

const initialState = {
    score: 0
}

const scoreReducer = (state = initialState, action) => {
    switch (action.type){
        case DISPLAY_SCORE:
        return{...state, score: action.data};
        case EMPTY_SCORE: 
        return{...state, score: action.data};
        default:
        return state;
    }
}

export default scoreReducer;