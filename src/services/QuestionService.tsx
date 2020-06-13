import { getQuestionsCallbackType } from '../types';

export const GetQuestions = (callback: getQuestionsCallbackType) => {
  return fetch('https://polls.apiblueprint.org/questions')
    .then(handleErrors)
    .then(res => res.json())
    .then(
      (result) => {
        callback(result)
      },
      (error) => {
        callback([], error.message)
      }
    )
};

const handleErrors = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
