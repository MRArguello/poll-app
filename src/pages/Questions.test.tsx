import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { StateType } from '../types';
import Questions from './Questions';
import { StateProvider } from '../context/context';
import { updateContextReducer } from '../context/reducer';
import { mockQuestions } from '../mocks/questions.mock';

const renderPage = (state: StateType) => (
  render(
    <StateProvider initialState={state} reducer={updateContextReducer}>
      <BrowserRouter>
        <Questions />
      </BrowserRouter>
    </StateProvider>
  )
);

describe('Questions Page', () => {
  it('Renders loading initial state', () => {
    const { getByTestId } = renderPage({
      questions: [],
      loading: true,
      error: undefined
    });

    const loadingElement = getByTestId('loading-element');

    expect(loadingElement).toBeInTheDocument();
  });

  it('Displays error on the page', () => {
    const { getByTestId } = renderPage({
      questions: [],
      loading: false,
      error: 'error message'
    });

    const errorElement = getByTestId('error-element');
    expect(errorElement).toBeInTheDocument();
  });

  it('Displays loaded questions', () => {
    const { queryAllByText } = renderPage({
      questions: mockQuestions,
      loading: false,
      error: undefined
    });

    const questions = queryAllByText('Vote!');
    expect(questions).toHaveLength(2);
  });
});
