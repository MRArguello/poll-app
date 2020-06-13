import  { StateType, ActionsType } from '../types';

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
    case 'getQuestions':
      console.log('getting questions');
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};
