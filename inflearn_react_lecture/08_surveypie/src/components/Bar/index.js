import styled from 'styled-components';

//status는 3가지 값
//pending 답변 x
//inProgress 값을 입력중인 상태
//done 값을 모두 입력한 상태

const Bar = styled.div`
  height: 8px;
  width: 120px;
  border-radius: 16px;
  background: ${({ status }) => {
    if (status === 'pending') {
      return '#dddddd';
    } else if (status === 'in-progress') {
      return '#6542f1';
    } else if (status === 'done') {
      return '#BAA9FF';
    }
  }};
`;
export default Bar;
