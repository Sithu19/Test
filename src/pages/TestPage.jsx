import React from "react";
import TestType from "../components/test-type.component/test-type.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { AllDATA } from "../Redux/test/test.selector";

const TestPage = ({ DATA }) => {
  return (
    <div>
      {DATA.map(({ id, ...otherDATA }) => (
        <TestType key={id} id={id} {...otherDATA} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  DATA: AllDATA,
});

export default connect(mapStateToProps, null)(TestPage);
