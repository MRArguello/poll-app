import addVotes from './addVotes';
import { mockQuestions } from '../mocks/questions.mock';

describe('Add votes helper', () => {
  it('Returns total votes on a question', () => {

    expect(addVotes(mockQuestions[1].choices)).toBe(1);
  });
});
