import './App.css';
import FooterComponent from './components/FooterComponent';
import Headercomponent from './components/Headercomponent';
import ListEmployeescomponent from './components/ListEmployeescomponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
            <Headercomponent />
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListEmployeescomponent}></Route>
                <Route path="/employees" component={ListEmployeescomponent}></Route>
                <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
              </Switch>
            </div>
            <FooterComponent />
      </Router>
      
    </div>
    
  );
}

export default App;
