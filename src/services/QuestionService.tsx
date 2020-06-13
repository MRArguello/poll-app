import { Question } from '../types';

export const GetQuestions = async (callback: (questions: Question[]) => void) => {
  fetch('https://polls.apiblueprint.org/questions')
    .then(handleErrors)
    .then(res => res.json())
    .then(
      (result) => {
        callback(result);
      },
      (error) => {
        console.log(error.message)
      }
    )
};

const handleErrors = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
