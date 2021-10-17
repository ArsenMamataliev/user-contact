import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Auth from "./pages/Auth";
import Contacts from "./pages/Contacts";



function App() {
  return (
     <div className="App">
      <Router>  
        <Switch>
          <Route exact path="/auth" component ={Auth} />
          <Route  path="/contacts" component ={Contacts} />
        </Switch> 
      </Router> 
    </div>
  );
}

export default App;
