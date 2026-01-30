import styled from 'styled-components';
import axios from 'axios';
import congrats from '../../assets/congrats.png';
import reload from '../../assets/reload.png';
import Button from '../../components/Button';
import useSurveyId from '../../hooks/useSurveyId';
import { useNavigate } from 'react-router-dom';

function CompletionPage() {
  //왜 굳이 axios 를 쓰냐
  //fetch 말고
  //그건, 다른 부가 기능들이 많아서 그럼
  // axios.get('http://localhost:3000').then((result) => {
  //   console.log('res', result);
  // });

  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <CompletionPageWrapper>
      <img src={congrats} alt="" width={209} height={204} />
      <MidText>설문을 완료했습니다.</MidText>
      <ReloadButton
        type="TERTIARY"
        onClick={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <img src={reload} alt="" width={24} height={24} />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const MidText = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 56px;
`;

//컴포넌트에 직접 스타일링 할때는 이렇게 하면 됨
const ReloadButton = styled(Button)`
  display: inline-flex;
  aligh-items: center;
  gap: 10px;
`;

export default CompletionPage;
