// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <BrowserRouter>
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/dashboard'} component={Dashboard} />
              <Route exact path={'/preferences'} component={Preferences} />
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
