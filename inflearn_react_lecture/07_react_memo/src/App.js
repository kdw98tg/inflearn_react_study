import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainerComponent';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 1767835382477, //시간 값
      updatedAt: 1767835384242, //시간 값
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 1767835407111,
      updatedAt: 1767835408193,
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0); //첫번째 메모를 선택한다고 선언

  const setMemo = (newMemo) => {
    //랜더링이 되기 직전까지 memos 의 원본을 훼손해버리니까 불변성이 훼손됨
    //시스템 전체적으로 불확실한 동작을 하게 됨
    const newMemos = [...memos];

    // console.log('memos', memos);

    newMemos[selectedMemoIndex] = newMemo;

    //참조의 변형이 없어서, 참조를 새로 넣어줘야 리랜더링이 일어남
    //새로운 배열은 만들어서 값만 넣어주는 식으로 참조를 바꿔줌
    setMemos(newMemos);

    //?원본은 아예 안바꾸는건가?
  };

  const addMemo = () => {
    const now = new Date().getTime();

    setMemos([
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ]);

    setSelectedMemoIndex(memos.length);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        addMemo={addMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
