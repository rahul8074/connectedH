import './App.css';
//importing login page
import Login from './Login';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Records from './Records';
import MyCart from './Mycart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router className="App">
  
      <Switch>
        <Route exact path="/records" component={Records} />
      <Route exact path="/" component={Login}/>
      <Route exact path="/mycart" component={MyCart}/>
       
      
    </Switch>
     
    </Router>
      </header>
    </div>
  );
}

export default App;
