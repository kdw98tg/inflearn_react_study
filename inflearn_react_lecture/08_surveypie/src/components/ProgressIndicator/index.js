import styled from 'styled-components';
import Bar from '../Bar';
import { useRecoilValue } from 'recoil';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import answersState from '../../stores/answers/atom';
import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';

function ProgressIndicator() {
  const length = useRecoilValue(questionsLengthState);
  const [answers] = useAnswers();
  const step = useStep();

  const bars = [];
  for (let i = 0; i < length; i++) {
    //debugger 활용할 수 있음
    let status = 'pending';
    if (i === step) {
      status = 'in-progress';
    } else if (answers[i]) {
      status = 'done';
    }
    bars.push(<Bar key={i} status={status} />);
  }

  return (
    <ProgressIndicatorWrapper>
      {bars}
      <PageCount>
        <span>{step + 1}</span>/{length}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
}

const PageCount = styled.div`
  color: #636262;
  margin-left: 8px;
  font-size: 16px;
  line-height: 19px;
  span {
    font-weight: bold;
    color: #121111;
  }
`;

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(100% + 24px);
  left: 0;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

export default ProgressIndicator;
