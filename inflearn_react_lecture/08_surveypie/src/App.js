// 사용할 라이브러리
//rdeux - 전역 상태 관리 (recoil도 많이 쓴다고 함)
//useSWR, axios - API 연동
//react-router - 라우팅
//styled-components - 스타일링
//immer - 데이터 불변성 유지
//antd - UI 라이브러리
//eslint 사용법

import QuestionBox from './components/QuestionBox';
import ProgressIndicator from './components/ProgressIndicator';
import { useState } from 'react';

function App() {
  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문2 입니다.',
      desc: '설명2 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
  ];

  const step = 0;

  const [answers, setAnswers] = useState([""]);

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default App;
