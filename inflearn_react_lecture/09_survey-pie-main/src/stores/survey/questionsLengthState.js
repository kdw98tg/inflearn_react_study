import { selector } from 'recoil';

import questionsState from './surveyState';

const questionsLengthState = selector({
  key: 'questionsLengthState',
  get: ({ get }) => {
    const questions = get(questionsState).questions;

    return questions.length;
  },
});

export default questionsLengthState;
