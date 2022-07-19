

import changenumber from "./Updown";
import changemult from "./Multi";

import { combineReducers } from "redux";


const rootreducer = combineReducers({
    changenumber,
    changemult,
})

export default rootreducer;