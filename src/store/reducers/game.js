import { SET_PLAYER_CHOICE, PLAY_AGAIN } from '../actions/names';
import { generateRandomNumber } from '../../utils/random-number';
import { COMPUTER, COMPUTER_CHOICES, PAPER, PLAYER, ROCK, SCISSORS, TIE } from '../../constants/constant';

const computerChoiceHandler = () => {
    const randomNumber = generateRandomNumber(1,3).toString();
    /* COMPUTER_CHOICES {
        "1": ROCK,
        "2": PAPER,
        "3": SCISSORS
    }
      */

    const randomChoice = COMPUTER_CHOICES[randomNumber];
    return randomChoice;   
     };

const generateOutcom = (playerPick, computerPick) => {
    if(playerPick === computerPick){
        return TIE;
    } else if(playerPick === ROCK && computerPick === PAPER){
        return COMPUTER;
    } else if(playerPick === ROCK && computerPick === SCISSORS){
        return PLAYER;
    } else if(playerPick === PAPER && computerPick === ROCK){
        return PLAYER;
    } else if(playerPick === PAPER && computerPick === SCISSORS){
        return COMPUTER;
    } else if(playerPick === SCISSORS && computerPick === ROCK){
        return COMPUTER;
    } else if(playerPick === SCISSORS && computerPick === PAPER){
        return PLAYER;
    }
};

const setPlayerChoiceHandler = (state, playerPick) => {
    const computerPick = computerChoiceHandler();
    const outcome = generateOutcom(playerPick, computerPick);

    let score = state.score;
    if(outcome === PLAYER) {
        score += 1;
    } else if(outcome === COMPUTER) {
        score -= 1;
    }
    console.log({ computerPick, playerPick, score, outcome, });
    return { computerPick, playerPick, score, outcome };
}

const gameState = (state= { 
    computerPick: "", 
    playerPick: "", 
    outcome: "", 
    score: 0 
}, action) => {
    switch (action.type) {
        case SET_PLAYER_CHOICE:
            return setPlayerChoiceHandler(state, action.choice);    
        case PLAY_AGAIN:
            return {
                computerPick: "", 
                playerPick: "", 
                outcome: "", 
                score: state.score,
            }  
        default: 
        return state;
    }
};

export default gameState;