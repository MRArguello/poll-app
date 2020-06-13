import React from 'react';
import { Link } from 'react-router-dom';
import { Question } from '../types';



const QuestionSummary = (currentQuestion: Question) => {
  const { published_at, choices, question, url } = currentQuestion;

  return (
    <Link to={`${url}`}>
      <p>{question}</p>
      <p>{published_at}</p>
      <p>{choices.length}</p>
    </Link>
  )
};

export default QuestionSummary;
