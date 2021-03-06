import React from 'react';
import 'bulma/css/bulma.css';
import Questions from './pages/Questions';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import QuestionDetail from './pages/QuestionDetail';
import QuestionCreate from './pages/QuestionCreate';
import { StateType } from './types';
import { StateProvider } from './context/context';
import { updateContextReducer } from './context/reducer';

import './App.scss';

const initialState: StateType = {
  questions: [],
  loading: true,
  error: undefined
};

const App = () => (
  <StateProvider initialState={initialState} reducer={updateContextReducer}>
    <div>
      <section className="section">
        <Router>
          <Switch>
            <Route exact path="/" component={Questions} />
            <Route exact path="/questions/:id" component={QuestionDetail} />
            <Route path="/create" component={QuestionCreate} />
          </Switch>
        </Router>
      </section>
    </div>
  </StateProvider>
);

export default App;
