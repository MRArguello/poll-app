import React, { useEffect, useCallback } from 'react';
import { Question, getQuestionsCallbackType } from '../types';
import QuestionSummary from '../components/QuestionSummary';
import { useStateValue } from '../context/context';
import { GetQuestions } from '../services/QuestionService';

const Questions = () => {
  const [context, dispatch] = useStateValue();
  const { loading, error, questions } = context;

  const getQuestionsCallback: getQuestionsCallbackType = useCallback((questions, error) => {
    if (loading) {
      dispatch({ type: 'toggleLoading' });
    }
    if (error) {
      return dispatch({ type: 'setError', payload: error });
    }

    dispatch({ type: 'setQuestions', payload: questions });
  }, [dispatch, loading])

  useEffect(() => {
    if (!questions || questions.length < 1) {
      GetQuestions(getQuestionsCallback);
    } else if (loading) {
      dispatch({ type: 'toggleLoading' });
    }
  }, [loading, context, questions, dispatch, getQuestionsCallback]);

  return (
    <div className="container is-widescreen">
      {loading && <span data-testid="loading-element">loading...</span>}
      {!loading && <h1 className="title is-3">All Questions</h1>}
      {!loading && error ? <span data-testid="error-element">{error}</span> : questions && (
        <div className="question-container">
          {questions.map((currentQuestion: Question) => (
            <QuestionSummary key={currentQuestion.published_at} {...currentQuestion} />
          ))}
        </div>
      )}
    </div>
  )
};

export default Questions;
