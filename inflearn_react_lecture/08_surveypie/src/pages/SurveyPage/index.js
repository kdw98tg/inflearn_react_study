import { Link } from 'react-router-dom';
import QuestionBox from '../../components/QuestionBox';
import ProgressIndicator from '../../components/ProgressIndicator';
import { useState } from 'react';

//파라미터들을 꺼내오는 훅스
import { useParams } from 'react-router-dom';

function SurveyPage() {
  const params = useParams();
  console.log('params', params);

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

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState(['']);
  return (
    <div>
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
    </div>
  );
}
export default SurveyPage;
