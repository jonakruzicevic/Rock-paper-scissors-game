import { SET_PLAYER_CHOICE, SET_PHASE, PLAY_AGAIN } from './names';

export const setPlayerChoice = (choice) => ({
    type: SET_PLAYER_CHOICE,
    choice
});

export const playAgain = () => ({
    type: PLAY_AGAIN
});

export const setPhase = (phase) => ({
    type: SET_PHASE,
    phase
});