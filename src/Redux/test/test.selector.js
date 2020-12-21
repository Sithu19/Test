import { createSelector } from "reselect";

const selectScore = (state) => state.test;

export const DATA = createSelector([selectScore], (DATA) => DATA.Final_DATA);

export const selectScores = createSelector(
  [selectScore],
  (score) => score.finalScore
);

export const DATASelector = createSelector(
  [selectScore],
  (data) => data.DATA_Ar
);

export const Ques_Ans = createSelector(
  [DATA],
  (quesandans) => quesandans.Question_Answer
);

export const AllDATA = createSelector([selectScore], (data) => data.ALL_DATA);
