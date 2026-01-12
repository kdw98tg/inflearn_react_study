import { useCallback, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { getItem, setItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debouncedSetItem = debounce(setItem, 5000);

// 브라우저에는 크게 2가지 스토리지가 있음
// 로컬 스토리지와 세션임
// 둘 다 key-value 쌍으로 저장함
// 쿠키는 사용자의 행동을 기록했다가, 서버로 전달함
// 쿠키가 많아지면, 네트워크가 비효율적이게 됨
// 그래서 localstroage가 포함됨
// 네트워크에 포함아 ㄴ돼서 비효율 없어짐
// local storage는 직접 지우지 않는 이상 브라우저를 껐다 켜도 유지됨
// session은 탭안에서는 유지, 창 닫으면 삭제
//local storage는 문자열만 저장이 됨

function App() {
  // const [memos, setMemos] = useState([
  //   {
  //     title: 'Memo 1',
  //     content: 'This is memo 1',
  //     createdAt: 1767835382477, //시간 값
  //     updatedAt: 1767835384242, //시간 값
  //   },
  //   {
  //     title: 'Memo 2',
  //     content: 'This is memo 2',
  //     createdAt: 1767835407111,
  //     updatedAt: 1767835408193,
  //   },
  // ]);

  const [memos, setMemos] = useState(getItem('memo') || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0); //첫번째 메모를 선택한다고 선언

  const setMemo = useCallback(
    (newMemo) => {
      //랜더링이 되기 직전까지 memos 의 원본을 훼손해버리니까 불변성이 훼손됨
      //시스템 전체적으로 불확실한 동작을 하게 됨
      // const newMemos = [...memos];

      // console.log('memos', memos);

      // newMemos[selectedMemoIndex] = newMemo;

      //참조의 변형이 없어서, 참조를 새로 넣어줘야 리랜더링이 일어남
      //새로운 배열은 만들어서 값만 넣어주는 식으로 참조를 바꿔줌

      // setMemos(newMemos);
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem('memo', newMemos);
        return newMemos;
      });
      //?원본은 아예 안바꾸는건가?

      // localStorage.setItem('memo', JSON.stringify(newMemos));
      // debouncedSetItem('memo', newMemos);
    },
    //지금은 상태가 2개밖에 없는데, 상태 2개를 디펜던시 리스트에 넣으면 사실 넣는 의미가 없음
    //그래서 setMemos의 state를 활용하면됨
    [selectedMemoIndex],
  );

  const addMemo = useCallback(() => {
    // setMemos(newMemos);
    //이거는 바꿔도 안빠짐
    //밑에 setSelectedMemoIndex를 쓰고 있어서
    setMemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: 'Untitled',
          content: '',
          createdAt: now,
          updatedAt: now,
        },
      ];
      debouncedSetItem('memo', newMemos);
      return newMemos;
    });

    // setItem('memo', newMemos);
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      // memos.splice(index, 1);
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);
        debouncedSetItem('memo', newMemos);

        return newMemos;
      });

      setMemos(memos);
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex],
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
