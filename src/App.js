import './App.css';
// import GlobalStyles from './globalStyles';
// import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './pages/index'
import beneficios from './pages/beneficios/beneficios'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/beneficios" exact component={beneficios}/>   
      </Switch>
      </Router>
    </div>
  ); 
}

export default App;
