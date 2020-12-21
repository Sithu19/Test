import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { StartTest } from "../../Redux/test/test.action";

const TestType = ({ id, StartTest, Test_type }) => {
  return (
    <div>
      <h1>Title</h1>
      <p>This test is for {Test_type} </p>
      <Link to="/testpage/start">
        <button onClick={() => StartTest(id)}>Start Test</button>
      </Link>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  StartTest: (id) => dispatch(StartTest(id)),
});

export default connect(null, mapDispatchToProps)(TestType);
