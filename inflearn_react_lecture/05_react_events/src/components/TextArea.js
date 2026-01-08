import { useState } from 'react';

function TextArea() {
  const [value, setValue] = useState('');

  console.log('[TextArea] render', value);

  return (
    <textarea
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default TextArea;
