// 사용할 라이브러리
//rdeux - 전역 상태 관리 (recoil도 많이 쓴다고 함)
//useSWR, axios - API 연동
//react-router - 라우팅
//styled-components - 스타일링
//immer - 데이터 불변성 유지
//antd - UI 라이브러리
//eslint 사용법

import { Routes, Route } from 'react-router-dom';
import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';
import styled from 'styled-components';
import './index.css';

function App() {
return (
    <AppWraper>
      <Box>
        <Routes>
          <Route path="/done/:surveyId" element={<CompletionPage />} />
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
        </Routes>
      </Box>
    </AppWraper>
  );
}

const Box = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  width: 700px;
  min-height: 500px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

const AppWraper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;

/*survey 페이지에서 추가로 필요한 것 : 설문 ID 가 필요함

- 전통적인 방식
https://www.surveypie.com/survey?id=abc123

- 다른 방식
- 뒤에 오는게 주소인지, 파라미터인지 알기가 힘듦
- router-dom 문서를 보면, survey/:id 이런식으로 설정하면 됨
- 그러면 뒤에 오는 것은 파라미터로 인식하게 됨
- id로 가져오면 그 안에 담긴 abc123 을 받을 수 있음
https://www.surveypie.com/survey/abc123

*/

export default App;
