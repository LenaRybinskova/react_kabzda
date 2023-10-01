import React, {useMemo, useState} from 'react';




// 2 это первый вариант: передали в юзСтейт функцию, он ее вызовет ОДИН РАЗ при первом рендере
const generateData=()=>{
    //супер сложный рассчет
    console.log("generateData")
    return 131213215
}

const UseStateWithSelfHook = () => {
    console.log("ExampleWithUseState")

    const [counter, setCounter] = useState(generateData)

    return (
        <>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
            {counter}
        </>
    );
};

export default UseStateWithSelfHook;