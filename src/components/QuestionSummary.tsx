import React from 'react';
import { Link } from 'react-router-dom';
import { Question } from '../types';
import formatDate from '../helpers/formatDate';


const QuestionSummary = (currentQuestion: Question) => {
  const { published_at, choices, question, url } = currentQuestion;

  return (
    <div className="card question-card">
      <div className="card-content">
        <p className="title is-4">{question}</p>
        <p className="title is-6">Published: {formatDate(published_at)}</p>
        <p className="subtitle is-6">Choices: {choices.length}</p>
      </div>
      <footer className="card-footer">
        <Link className="card-footer-item" to={`${url}`}>
          Vote!
        </Link>
      </footer>
    </div>
  )
};

export default QuestionSummary;
