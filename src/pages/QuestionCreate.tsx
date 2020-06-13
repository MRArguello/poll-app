import React, { useState, useEffect } from 'react';
import { Question, processedQuestionFormValuesType } from '../types';
import QuestionForm from '../components/QuestionForm';
import { Redirect } from "react-router-dom";
import { useStateValue } from '../context/context';
import { createQuestion } from '../services/QuestionService';

const QuestionCreate = () => {
  const [success, toggleSuccess] = useState(false);
  const [redirectHome, toggleredirectHome] = useState(false);
  const [context, dispatch] = useStateValue();
  const { loading, error } = context;

  const CreateQuestionCallback = (createdQuestion: Question, error?: string) => {
    if (error) {
      return dispatch({ type: 'setError', payload: error });
    }

    toggleSuccess(true);
    setTimeout(() => toggleredirectHome(true), 1000);
    dispatch({ type: 'addNewQuestion', payload: createdQuestion });
  };

  const CreateNewQuestion = (values: processedQuestionFormValuesType) => {
    return createQuestion(values, CreateQuestionCallback);
  };

  useEffect(() => {
    loading && dispatch({ type: 'toggleLoading' });
  }, [loading, dispatch]);

  if (redirectHome) {
    return <Redirect to='/' />
  }

  return (
    <div className="container is-widescreen">
      {!loading && success && <div className="notification is-primary">Question Created succesfully</div>}
      {!loading && error ? <span className="help is-danger" data-testid="error-element">{error}</span> : (
        <>
          <h1 className="title is-3">Create your own question!</h1>
          <QuestionForm {...{ sendQuestion: CreateNewQuestion }} />
        </>
      )}
    </div>
  )
}

export default QuestionCreate;
