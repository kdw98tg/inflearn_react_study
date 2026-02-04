import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import useStep from '../../hooks/useStep';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import postAnswers from '../../services/postAnswers';
import useSurveyId from '../../hooks/useSurveyId';
import useAnswers from '../../hooks/useAnswers';
import { useState } from 'react';
import useRequiredOption from '../../hooks/useRequiredOption';

function ActionButtons({ }) {
  const step = useStep();
  const surveyId = useSurveyId();
  const [answers, setAnswer] = useAnswers();
  const [isPosting, setIsPosting] = useState(false);
  const isRequired = useRequiredOption();

  const questionsLength = useRecoilValue(questionsLengthState);
  const isBlockToNext = isRequired ? !answers[step]?.length : false;

  const isLast = questionsLength - 1 === step;

  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            //성공했을때 navigate
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                setAnswer([]);
                navigate(`/done/${surveyId}`);
              })
              .catch((error) => {
                console.log(error.response);
                alert('에러 발생. 다시 시도해라');
                setIsPosting(false);
              });
          }}
          disabled={isPosting || isBlockToNext}
        >
          {isPosting ? '제출중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
          disabled={isBlockToNext}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
