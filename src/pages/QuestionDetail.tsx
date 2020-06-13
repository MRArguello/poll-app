import React, { useState, useEffect } from 'react';
import { Question, VoteFormValueType } from '../types';
import VoteForm from '../components/VoteForm';
import addVotes from '../helpers/addVotes';
import { useParams, Redirect } from "react-router-dom";
import { useStateValue } from '../context/context';

const QuestionDetail = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>();
  const [context, dispatch] = useStateValue();
  const { loading, error, questions } = context;

  const totalVotes = currentQuestion ? addVotes(currentQuestion.choices) : 0;
  const castVote = (values: VoteFormValueType) => console.log(values);

  useEffect(() => {
    loading && dispatch({ type: 'toggleLoading' });
    questions && setCurrentQuestion(questions.find((question: Question) => question.url === `/questions/${id}`));
  }, [currentQuestion, loading, context, id, questions, dispatch])

  if (!questions) {
    return <Redirect to='/' />
  }

  return (
    <>
      {loading && <span data-testid="loading-element">loading...</span>}

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
