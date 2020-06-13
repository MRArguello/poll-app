import { mockQuestions } from '../mocks/questions.mock';
import React from 'react';
import { createMemoryHistory } from "history";
import { BrowserRouter, Router } from 'react-router-dom';
import QuestionSummary from './QuestionSummary';
import { render, act } from '@testing-library/react';


describe('QuestionSummary component', () => {
  it('renders question info', () => {
    const { getByTestId } = render(<BrowserRouter><QuestionSummary {...mockQuestions[0]} /></BrowserRouter>);

    expect(getByTestId('question')).toBeInTheDocument();
    expect(getByTestId('date')).toBeInTheDocument();
    expect(getByTestId('choices-number')).toBeInTheDocument();
    expect(getByTestId('vote-link')).toBeInTheDocument();
  })

  it('navigates to question url', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(<Router history={history}><QuestionSummary {...mockQuestions[0]} /></Router>);

    act(() => {
      const goHomeLink = getByTestId('vote-link');
      goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(history.location.pathname).toBe(mockQuestions[0].url);
  })
});
