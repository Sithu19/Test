import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { DATASelector, DATA, Ques_Ans } from "../../Redux/test/test.selector";
import { NextPage, Finish } from "../../Redux/test/test.action";
import TestQuestion from "../test-question.component/test-question.component";

const TestStart = ({ NextPage, Finish, DATA_ID, DATA }) => {
  const final = DATA.Question_Answer;
  return (
    <div>
      <TestQuestion DATA={DATA} />
      <div>
        {DATA_ID === final.length - 1 ? (
          <Link to="/testpage/end">
            <button onClick={Finish}>Finish</button>
          </Link>
        ) : (
          <button onClick={NextPage}>Next</button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  NextPage: () => dispatch(NextPage()),
  Finish: () => dispatch(Finish()),
});

const mapStateToProps = createStructuredSelector({
  DATA_ID: DATASelector,
  DATA: DATA,
  DATA_LENGTH: Ques_Ans,
});

export default connect(mapStateToProps, mapDispatchToProps)(TestStart);
