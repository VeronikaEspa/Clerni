import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyles/>
      <Switch>
        {/* <Route path="/" exact component={}/> */}
        <Route/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
