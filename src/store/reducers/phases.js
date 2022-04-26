import { SET_PHASE, PLAY_AGAIN } from '../actions/names';
import { PHASE_1 } from '../../constants/constant';


const phasees = (state = {currentPhase: PHASE_1}, action) => {
    switch (action.type) {
        case SET_PHASE:
            return { currentPhase: action.phase};
        case PLAY_AGAIN:
            return { currentPhase: PHASE_1};
        default:
            return state;
    }
};

export default phasees;