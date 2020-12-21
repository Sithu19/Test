import React from "react";
import { Switch, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";

import TestStart from "./components/TestStart.component/TestStart.component";
import TestEnd from "./components/test-end.component/test-end.component";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/testpage/end" exact component={TestEnd} />
        <Route path="/testpage/start" exact component={TestStart} />
        <Route path="/testpage" component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
