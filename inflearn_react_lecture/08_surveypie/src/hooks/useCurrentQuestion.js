import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';
import axios from 'axios';
import useSurveyId from './useSurveyId';

function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData?.questions || [];

  return questions[step];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((result) => {
  //     console.log(result);
  //     setSurvey(result.data);
  //   });
  // }, [surveyId, setSurvey]);

}

export default useCurrentQuestion;
