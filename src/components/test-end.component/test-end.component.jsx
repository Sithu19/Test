import React from "react";
import { connect } from "react-redux";
import { selectScores } from "../../Redux/test/test.selector";
import { createStructuredSelector } from "reselect";

class TestEnd extends React.Component {
  constructor(endTest) {
    super(endTest);
    this.state = {
      ans: endTest,
    };
  }

  componentDidUpdate() {
    this.setState({ ans: (this.state.ans.endTest = 0) });
  }

  render() {
    const ans = this.state.ans.endTest;
    let Answer;
    if (ans < 15) {
      return (Answer = "Your depression level is less than 15");
    } else if (ans > 15) {
      return (Answer = "Your depression level is greater than 15");
    }
    return (
      <div>
        <p>{this.props.Answer}</p>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  endTest: selectScores,
});

export default connect(mapStateToProps, null)(TestEnd);
