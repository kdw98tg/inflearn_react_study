import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import surveyState from '../stores/survey/surveyState';

function useStep() {
  const params = useParams();
  const step = parseInt(params.step);
  return step;
}

export default useStep;
