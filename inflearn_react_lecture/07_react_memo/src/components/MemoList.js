import MemoItem from './MemoItem';

function MemoList({ memos, setSelectedMemoIndex ,selectedMemoIndex}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClick={() => {
            setSelectedMemoIndex(index);
          }}
          isSelected={index === selectedMemoIndex}
          index={index}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
