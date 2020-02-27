import React  from 'react';
import './App.css';

import StudentManagement from './StudentManagemant';
import studentList from './StudentList';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <Switch>
  <Route exact path='/' component={StudentManagement}/>

  <Route exact path='/:id' component={StudentManagement}/>
  <Route path='/student/list' component={studentList}/>
  </Switch>
  </Router>
  );
}

export default App;
