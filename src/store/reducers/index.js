import { combineReducers } from "redux";

import game from './game';
import phases from "./phases";

export default combineReducers({
    game,
    phases
});