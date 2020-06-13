import React from 'react';
import { Question } from '../types';
import QuestionSummary from '../components/QuestionSummary';
import { useStateValue } from '../context/context';

const Questions = () => {
  const [context, dispatch] = useStateValue();
  const { questions } = context;

  return (
  <div className="container is-widescreen">
    <h1 className="title is-2">All Questions</h1>
    <div className="question-container">
      {questions.map((currentQuestion: Question) => (
        <QuestionSummary key={currentQuestion.published_at} {...currentQuestion} />
      ))}
    </div>
  </div>
)};

export default Questions;
