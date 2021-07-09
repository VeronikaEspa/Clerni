import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clerni from './pages/Clerni/Clerni'
import beneficios from './pages/beneficios/beneficios'

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/Clerni" exact component={Clerni}/>
        <Route path="/beneficios" exact component={beneficios}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
