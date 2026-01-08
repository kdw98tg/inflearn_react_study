import ReactDOM from 'react-dom/client';
import './index.css';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const black = {
  color: 'black'
};
const blue = {
  color: 'blue'
};


const element = (

  <div style={{ display: 'flex' }}>
    {num.map((i) => (
      <div>
        {num.map((j) => (
        <div style={{color:isOdd(i) ? 'blue' : 'black', padding:10}}>{i} * {j} = {i * j}</div>
        ))}
      </div>
    ))}
  </div>
);

function isOdd(value) {
  return value % 2 === 1;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);