import React from 'react';
import 'bulma/css/bulma.css';
import Questions from './pages/Questions';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import QuestionDetail from './pages/QuestionDetail';
import './App.scss';

const App = () => (
  <div>
    <section className="section">
      <Router>
        <Switch>
          <Route exact path="/" component={Questions} />
          <Route exact path="/questions/:id" component={QuestionDetail} />
        </Switch>
      </Router>
    </section>
  </div>
);

export default App;
