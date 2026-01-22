import { useState } from 'react';
import styled from `styled-component`

function TextInput() {
  const [value, setValue] = useState('');

  console.log('[TextInput] render', value);

  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

const Input= styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
`;
export default TextInput;
