import ReactDOM from 'react-dom/client';
import "./index.css";

let text = 'Hello, world!';
const num = 15;
const obj = { key: 0, a: 1, b: 2 };
const arr = ['a', 'b', 'c'];
const imageUrl =
  'https://dst6jalxvbuf5.cloudfront.net/static/img/logo/logo.svg';

const arr1 = [1, 2, 3];
const text1 = "";

// 2. style 재활용
// 3. 속성은 camelCase
const roundBoxStyle = {
  top: 50,
  left: 50,
  width: '50%',
  height: '200px',
  padding: 20,
  background: 'rgba(162,216,235,0.6)',
  borderRadius: 50
};

const element = (
  <div>
    <h1>변수 넣기</h1>
    <ul>
      <li>{text}</li>
      <li>{text + 'test'}</li>
    </ul>
    <h1>숫자 및 계산식 넣기</h1>
    <ul>
      <li>{num}</li>
      <li>{num + 15}</li>
    </ul>
    <h1>Boolean, Nullish 값 넣기</h1>
    <ul>
      <li>{true}</li>
      <li>{false}</li>
      <li>{undefined}</li>
      <li>{null}</li>
    </ul>
    <h1>Object, Array 넣기</h1>
    <ul>
      {/* <li>{obj}</li> */}
      <li>{arr}</li>
    </ul>
    <h1>주석 넣기</h1>
    <ul>
      <li>{/* 주석입니다. */}</li>
    </ul>
    <h1>태그 속성 넣기</h1>
    <ul>
      <li>
        <img src={imageUrl} alt="logo" />
      </li>
    </ul>

    <h1>삼항연산자</h1>
    <ul>
      <li>{1 + 1 === 2 ? "참입니다" : "거짓입니다."}</li>
    </ul>

    <h1>AND 연산자</h1>
    <ul>
      <li>{1 + 1 === 2 && 'AND 연산자1'}</li>
      <li>{arr1.length === 1 && 'AND 연산자2'}</li>
      <li>{arr1.length === 3 && 'AND 연산자3'}</li>
    </ul>

    <h1>OR 연산자</h1>
    <ul>
      <li>{1 + 1 !== 2 || 'OR 연산자1'}</li>
      <li>{text || 'OR 연산자2'}</li>
    </ul>

    <h1>Array.map</h1>
    <ul>
      {arr.map((item, index) => {
        return <li key={index}><h4>{item}</h4></li>;
      })}
    </ul>

    <div style={roundBoxStyle}>
      <div className="highlight">
        <p>Hello, World!</p>
      </div>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);