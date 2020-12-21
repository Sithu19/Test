import { ActionTypes } from "./test.type";

export const AddScore = (result) => ({
  type: ActionTypes.SET_TEST,
  payload: result,
});

export const NextPage = () => ({
  type: ActionTypes.NEXT_PAGE,
});

export const StartTest = (id) => ({
  type: ActionTypes.START_TEST,
  payload: id,
});

export const Finish = () => ({
  type: ActionTypes.Finish,
});
