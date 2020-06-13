import React from 'react';
import { Question } from '../types';
import QuestionSummary from '../components/QuestionSummary';

const mockQuestions: Question[] = [
  {
    "question": "Favourite programming language?",
    "published_at": "2020-06-12T02:52:37.924872+00:00",
    "url": "/questions/8",
    "choices": [
      {
        "choice": "Objective-C",
        "votes": 0,
        "url": "/questions/8/choices/32"
      },
      {
        "choice": "Python",
        "votes": 0,
        "url": "/questions/8/choices/31"
      },
      {
        "choice": "Ruby",
        "votes": 0,
        "url": "/questions/8/choices/33"
      },
      {
        "choice": "Swift",
        "votes": 0,
        "url": "/questions/8/choices/30"
      }
    ]
  },
  {
    "question": "Favourite Fucking language?",
    "published_at": "2020-06-11T19:24:45.173642+00:00",
    "url": "/questions/7",
    "choices": [
      {
        "choice": "Rabbani",
        "votes": 1,
        "url": "/questions/7/choices/27"
      },
      {
        "choice": "Baall",
        "votes": 0,
        "url": "/questions/7/choices/26"
      },
      {
        "choice": "Failsalbal",
        "votes": 0,
        "url": "/questions/7/choices/29"
      },
      {
        "choice": "NiceC",
        "votes": 0,
        "url": "/questions/7/choices/28"
      }
    ]
  }
];

const Questions = () => (
  <div>
    <p>Questions page </p>
    {mockQuestions.map((currentQuestion: Question) => (
      <QuestionSummary {...currentQuestion} />
    ))}
  </div>
);

export default Questions;
