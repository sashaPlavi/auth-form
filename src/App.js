import './App.css';
import RegistrationForm from './pages/RegistartionForm/RegistrationForm';
import LoginForm from './pages/LoginForm/LoginForm';
import Posts from './pages/Posts/Posts';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/register" component={RegistrationForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/posts" component={Posts}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
