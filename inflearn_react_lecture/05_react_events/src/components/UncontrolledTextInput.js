import { useRef } from 'react';

function UncontrolledTextInput() {
    //input ref를 사용하면 리랜더링 없음
    //useRef 훅을 이요해서 하용해서 리랜더링 성능 줄일 수 있음
    const inputRef = useRef();

    console.log('[UncontrolledTextInput] render');

    return (
        <>
            <input ref={inputRef} type="text" />
            <button
                onClick={() => {
                    console.log(inputRef.current.value);
                }}
            >
                Get value
            </button>
        </>
    );
}

export default UncontrolledTextInput;
