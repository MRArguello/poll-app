import { StateType, ActionsType, Question, Choice } from '../types';

const updateQuestionHelper = (questions: Question[], updatedChoice: Choice, questionToUpdate: string) => {
  const questionsToUpdate = questions;

  for (const question of questionsToUpdate) {
    if (question.url === questionToUpdate) {
      for (const choice of question.choices) {
        if (choice.url === updatedChoice.url) {
          choice.votes = updatedChoice.votes;
        }
      }
    }
  }

  return questionsToUpdate;
};

export const updateContextReducer = (state: StateType, action: ActionsType) => {
  console.log(state);
  switch (action.type) {
    case 'toggleLoading':
      console.log('loading');
      return {
        ...state,
        loading: !state.loading,
      };
    case 'setError':
      console.log('error');
      return {
        ...state,
        error: action.payload,
      };
    case 'setQuestions':
      console.log('getting questions');
      return {
        ...state,
        questions: action.payload,
      };
    case 'updateQuestion':
      console.log('updating question');
      return {
        ...state,
        questions: updateQuestionHelper(state.questions, action.payload.updatedChoice, action.payload.questionToUpdate)
      }
    default:
      return state;
  }
};
