import React, { useState, useEffect } from 'react';
import { Question, VoteFormValueType, Choice } from '../types';
import VoteForm from '../components/VoteForm';
import addVotes from '../helpers/addVotes';
import { useParams, Redirect } from "react-router-dom";
import { useStateValue } from '../context/context';
import { VoteOnQuestion } from '../services/QuestionService';

const QuestionDetail = () => {
  const { id } = useParams();
  const [redirectHome, toggleRedirectHome] = useState(false);
  const [success, toggleSuccess] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>();
  const [context, dispatch] = useStateValue();
  const { loading, error, questions } = context;

  const totalVotes = currentQuestion ? addVotes(currentQuestion.choices) : 0;

  const castVoteCallback = (updatedChoice: Choice, error?: string) => {
    if (loading) {
      dispatch({ type: 'toggleLoading' });
    }

    if (error) {
      return dispatch({ type: 'setError', payload: error });
    }

    toggleSuccess(true);
    dispatch({ type: 'updateQuestion', payload: { updatedChoice, questionToUpdate: currentQuestion && currentQuestion.url } });
    return setTimeout(() => toggleRedirectHome(!redirectHome), 4000);
  };

  const castVote = (values: VoteFormValueType) => {
    dispatch({ type: 'toggleLoading' });

    return VoteOnQuestion(values.choice, castVoteCallback);
  };

  useEffect(() => {
    loading && dispatch({ type: 'toggleLoading' });
    questions && setCurrentQuestion(questions.find((question: Question) => question.url === `/questions/${id}`));
  }, [currentQuestion, loading, context, id, questions, dispatch]);

  if (questions.length === 0) {
    return <Redirect to='/' />
  };

  if (redirectHome) {
    return <Redirect to='/' />;
  };

  return (
    <>
      {loading && <span data-testid="loading-element">loading...</span>}
      {!loading && success && <span>voted</span>}
      {!loading && error ? <span data-testid="error-element">{error}</span> : questions && (
        <div className="container is-widescreen">
          {currentQuestion && (
            <>
              <h1 className="title is-3">Question: {currentQuestion.question}</h1>
              <VoteForm {...{ choices: currentQuestion.choices, totalVotes: totalVotes, sendVote: castVote }} />
            </>
          )}
        </div>
      )}
    </>
  )
}

export default QuestionDetail;
