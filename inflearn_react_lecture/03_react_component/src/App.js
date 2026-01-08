// import Hello from './components/Hello/Hello';
// import World from './components/World/World';
// import Heading from './components/Heading/Heading';
import { useState } from 'react';


//export하면 다른 파일에서 해당 함수를 사용할 수 있게 됨
// export default function App() {
//   return (
//     <div>
//       <Heading type='h1'>Hello,</Heading>
//       <Heading type='h2'>World</Heading>
//     </div>
//   );
// }

export default function App() {

  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={() => { setValue(value + 1); }}>Increase value</button>
      <button onClick={() => { setValue(0); }}>Reset value</button>
    </div>
  )
}
