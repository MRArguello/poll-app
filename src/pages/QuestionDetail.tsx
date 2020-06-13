import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { useParams, Redirect } from "react-router-dom";
import { useStateValue } from '../context/context';

const QuestionDetail = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>();
  const [context, dispatch] = useStateValue();
  const { loading, error, questions } = context;

  useEffect(() => {
    if (loading) {
      dispatch({ type: 'toggleLoading' });
    }
    if (questions) {
      setCurrentQuestion(questions.find((question: Question) => question.url === `/questions/${id}`))
    }
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
              {currentQuestion.choices.map((choice) =>
                <div key={choice.choice}>
                  <p>{choice.choice}</p>
                  <p>{choice.votes}</p>
                </div>
              )}
            </>)}
        </div>
      )}
    </>
  )
}

export default QuestionDetail;
