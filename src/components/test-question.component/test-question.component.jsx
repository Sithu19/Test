import React from "react";
import { connect } from "react-redux";

import { AddScore } from "../../Redux/test/test.action";
import { DATASelector } from "../../Redux/test/test.selector";
import { createStructuredSelector } from "reselect";

const TestQuestion = ({ DATA_ID, AddScore, DATA }) => {
  const DATA_Li = DATA.Question_Answer[DATA_ID];
  return (
    <div>
      <h1>{DATA.Test_type}</h1>
      <h2>{DATA_Li.Ques}</h2>
      <div>
        {DATA_Li.Answer.map((Ans, i) => (
          <button key={i} onClick={() => AddScore(i)}>
            {Ans.ans}
          </button>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddScore: (i) => dispatch(AddScore(i)),
});

const mapStateToProps = createStructuredSelector({
  DATA_ID: DATASelector,
});

export default connect(mapStateToProps, mapDispatchToProps)(TestQuestion);
