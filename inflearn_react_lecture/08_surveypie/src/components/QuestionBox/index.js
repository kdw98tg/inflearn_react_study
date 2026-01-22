import Desc from '../Desc';
import Title from '../Title';
import Body from '../Body';
import ActionButtons from '../ActionButtons';
import styled from 'styled-components';

function QuestionBox({ question, questionsLength, step, answer, setAnswer }) {
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      ></Body>
      <ActionButtons questionsLength={questionsLength} step={step} />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

//flex:1 하면, 남는만큼 차지하게 됨

export default QuestionBox;
