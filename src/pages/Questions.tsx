import React, { useEffect } from 'react';
import { Question } from '../types';
import QuestionSummary from '../components/QuestionSummary';
import { useStateValue } from '../context/context';
import { GetQuestions } from '../services/QuestionService';

const Questions = () => {
  const [context, dispatch] = useStateValue();
  const { questions } = context;

  const GetQuestionsCallback = (data: Question[]) => {
    console.log(data)
  }

  useEffect(() => {
    GetQuestions(GetQuestionsCallback);
  }, []);

  return (
    <div className="container is-widescreen">
      <h1 className="title is-2">All Questions</h1>
      <div className="question-container">
        {questions.map((currentQuestion: Question) => (
          <QuestionSummary key={currentQuestion.published_at} {...currentQuestion} />
        ))}
      </div>
    </div>
  )
};

export default Questions;
