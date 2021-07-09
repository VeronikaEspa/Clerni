import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './pages/index/index'
import beneficios from './pages/beneficios/beneficios'

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/index" exact component={Index}/>
        <Route path="/beneficios" exact component={beneficios}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
