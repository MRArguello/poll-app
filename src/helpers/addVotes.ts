import { Choice } from '../types';

const addVotes = (choices: Choice[]) => {

  const reducer = (acc: number, current: Choice) => {
    if (current.votes) {
      return acc + current.votes
    }
    return acc;
  }

  return choices.reduce(reducer, 0);
}

export default addVotes;
