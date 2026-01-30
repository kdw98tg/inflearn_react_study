import axios from 'axios';
import { atom, selector } from 'recoil';
import mainApi from '../../services/apis/mainApi';
import getSurvey from '../../services/getSurvey';

const surveyState = selector({
  key: 'surveyState',
  get: async () => {
    //이렇게하면 훅을 못가져옴 (컴포넌트가 아니라서)
    const response = await getSurvey(window.location.pathname.split('/')[2]);
    return response.data;
  },
});

export default surveyState;
