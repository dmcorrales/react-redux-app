import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import UserComponent from './components/user/list-user';
import LoginComponent from './components/login';
import EditUserComponent from './components/user/edit-user'; 
import CreateUserComponent from './components/user/create-user';
import 'antd/dist/antd.css'; 

function App() {
  return (
    <div>
      <Router>
          <Switch>
             <Route exact path="/login" component={LoginComponent} />
             <Route exact path="/user" component={UserComponent} />
             <Route exact path="/user/edit/:id" component={EditUserComponent} />
             <Route exact path="/user/create" component={CreateUserComponent} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
