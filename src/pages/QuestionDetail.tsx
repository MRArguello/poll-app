import React, { useState, useEffect } from 'react';
import { Question, VoteFormValueType, Choice } from '../types';
import VoteForm from '../components/VoteForm';
import addVotes from '../helpers/addVotes';
import { useParams, Redirect } from "react-router-dom";
import { useStateValue } from '../context/context';
import { VoteOnQuestion } from '../services/QuestionService';

const QuestionDetail = () => {
  const { id } = useParams();
  const [success, toggleSuccess] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>();
  const [context, dispatch] = useStateValue();
  const { loading, error, questions } = context;

  const totalVotes = currentQuestion ? addVotes(currentQuestion.choices) : 0;

  const castVoteCallback = (updatedChoice: Choice, error?: string) => {
    if (error) {
      return dispatch({ type: 'setError', payload: error });
    }

    toggleSuccess(true);
    setTimeout(() => toggleSuccess(false), 1500);
    dispatch({ type: 'updateQuestion', payload: { updatedChoice, questionToUpdate: currentQuestion && currentQuestion.url } });
  };

  const castVote = (values: VoteFormValueType) => {
    return VoteOnQuestion(values.choice, castVoteCallback);
  };

  useEffect(() => {
    loading && dispatch({ type: 'toggleLoading' });
    questions && setCurrentQuestion(questions.find((question: Question) => question.url === `/questions/${id}`));
  }, [currentQuestion, loading, context, id, questions, dispatch]);

  if (questions.length === 0) {
    return <Redirect to='/' />
  };

  return (
    <div className="container is-widescreen">
      {!loading && success && <div className="notification is-primary">Vote casted succesfully</div>}
      {!loading && error ? <span className="help is-danger" data-testid="error-element">{error}</span> : questions && (
        <div className="container is-widescreen">
          {currentQuestion && (
            <>
              <h1 className="title is-3">Question: {currentQuestion.question}</h1>
              <VoteForm {...{ choices: currentQuestion.choices, totalVotes: totalVotes, sendVote: castVote }} />
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default QuestionDetail;
