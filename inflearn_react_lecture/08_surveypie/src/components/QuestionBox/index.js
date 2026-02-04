import styled from 'styled-components';

import useCurrentAnswer from '../../hooks/useCurrentAnswer';
import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

function QuestionBox() {
  //hooks
  const [answer, setAnswer] = useCurrentAnswer();
  //hooks
  const question = useCurrentQuestion(); // undefined

  // props로 데이터를 넣는 경우는
  // 자식 컴포넌트는 어떤 데이터가 들어올지 모르고
  // 부모 컴포넌트 입장에서 자식 컴포넌트를 props에 따라서 재사용하고 싶을때
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
