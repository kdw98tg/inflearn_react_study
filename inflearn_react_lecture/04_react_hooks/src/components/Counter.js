import { useCallback, useEffect, useState } from 'react';

//훅은 리액트 프레임워크에서 배열로 관리하는데, 
//조건문이 걸려있으면 관리에 문제가 생김
//훅스는 리액트 컴포넌트에서만 사용가능함
function Counter() {
    console.log("Render Counter!");

    const [value, setValue] = useState(0);

    //useEffect를 사용하면 제일 처음 한번만 랜더링 됨.
    //useEffect는 정확히 말하면, 마운트, 언마운트 될때만 호출되는 것이 아니라, 
    //컴포넌트의 상태변화에 따라서 특정 로직을 실행시키고 싶어서 하는거임
    //dependecy list에 있는 값들을 보고, 그 상태가 변하면 특정 로직을 실행시킴
    useEffect(() => {
        console.log("컴포넌트가 최초 마운트 될 때 호출 1");

        //지금은, dependency list가 비어있기 때문에, 무조건 한번만 호출됨
        //근데 클린업 함수에서 해제를 안해주기 때문에, 언마운트 돼도 해당 이벤트는 계속 남아있음
        //그래서 return에 클린업 함수에서 해제를 해줘야 함
        const clickBodyEvent = () => {
            console.log('click body');
        }
        document.body.addEventListener('click', clickBodyEvent);

        //클린업 함수
        return () => {
            console.log("컴포넌트가 언마운트 될 때 호출 1");
            document.body.removeEventListener('click', clickBodyEvent);
        };
    }, []);

    //value가 바뀔때마다 실행되는게 정상임 그래서 계속 호출되는거임
    //dependency list에 있는 value가 바뀔때 실행하겠다 라는 뜻
    //dependency list에 값이 있으면, 클린업 함수는 언제 실행이 되냐면, useEffect가 실행되기 직전에
    //클린업함수를 먼저 호출하고, 그다음에 useEffect를 호출함
    useEffect(() => {

        console.log("컴포넌트가 최초 마운트 될 때 호출 2");

        //클린업 함수임
        //컴포넌트가 언마운트 될 때 호출됨
        return () => {
            console.log("컴포넌트가 언마운트 될 때 +dependency list에 있는 값이 바뀔때, 호출 2");
        };

    }, [value]);

    //성능을 위해서 등장함
    //Increase Value 라는 함수를 매 랜더링 마다 생성하고, 그것이 담긴 jsx를 반환하게 됨
    //근데, 이게 불필요하게 계속 새로운게 생성이 되니까
    //useCallback을 사용하면 다시 생성 안됨
    //성능을 올리기 위해 나온 개념임
    //메모이제이션 이라고 함
    //dependency 리스트에 있는 값을 보고, value 에 의존성을 가지면서
    //value가 바뀌면 다시 함수를 만들어줌
    //즉. value가 바뀔때만 다시 함수를 만들게 됨
    //여기서는 value가 바뀔때마다 함수를 만들어야해서 의미없음
    const increaseValue = useCallback(() => {
        setValue(value + 1);
    }, [value]);

    //근데 리셋같은경우는 0으로 초기화하는게 무조건 똑같으니까 useCallback을 사용하면 좋음
    const resetValue = useCallback(() => {
        setValue(0);
    }, [])

    return (
        <div>
            <h1>value: {value}</h1>
            <button onClick={increaseValue}>Increase value</button>
            <button onClick={resetValue}>Reset value</button>
        </div>
    );
}

export default Counter;