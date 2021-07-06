import './App.css';
// import GlobalStyles from './globalStyles';
// import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './pages/index'

function App() {
  return (
    <div className="App">
      {/* <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/" exact component={index}/>
      </Switch>
      </Router> */}
      <Index/>
    </div>
  );
}

export default App;
