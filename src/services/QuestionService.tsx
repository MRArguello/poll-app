import { getQuestionsCallbackType, voteOnQuestionCallbackType } from '../types';

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

export const VoteOnQuestion = (choice: string, callback: voteOnQuestionCallbackType) => {
  return fetch(`https://polls.apiblueprint.org${choice}`, { method: 'post' })
    .then(handleErrors)
    .then(res => res.json())
    .then(
      (result) => {
        callback(result)
      },
      (error) => {
        callback({ choice: '', votes: 0, url: '' }, error.message)
      }
    )
};

const handleErrors = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
