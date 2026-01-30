import { selector } from 'recoil';
import surveyState from './surveyState'
const questionsLengthState = selector({
  key: 'questionsLengthState',
  get: ({ get }) => {
    const questions = get(surveyState).questions;
    return questions.length;
  },
});

export default questionsLengthState;
