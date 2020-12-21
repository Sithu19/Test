import { ActionTypes } from "./test.type";
import DATA_ALL from "./test.data";

const INITIAL_STATE = {
  score: 0,
  finalScore: 0,
  ALL_DATA: DATA_ALL,
  Final_DATA: 0,
  DATA_Ar: 0,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.START_TEST:
      switch (action.payload) {
        case 1:
          return {
            ...state,
            Final_DATA: state.ALL_DATA[0],
          };
        case 2:
          return {
            ...state,
            Final_DATA: state.ALL_DATA[1],
          };
        case 3:
          return {
            ...state,
            Final_DATA: state.ALL_DATA[2],
          };
        default:
          return state;
      }
    case ActionTypes.SET_TEST:
      switch (action.payload) {
        case 0:
          return { ...state, score: 1 };
        case 1:
          return { ...state, score: 2 };
        case 2:
          return { ...state, score: 3 };
        case 3:
          return { ...state, score: 4 };
      }
      break;
    case ActionTypes.NEXT_PAGE:
      return {
        ...state,
        score: 0,
        finalScore: state.finalScore + state.score,
        DATA_Ar: state.DATA_Ar + 1,
      };
    case ActionTypes.Finish:
      return {
        ...state,
        score: 0,
        DATA_Ar: 0,
      };
    default:
      return state;
  }
};

export default testReducer;
