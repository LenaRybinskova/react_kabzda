import React, {useMemo, useState} from 'react';




// 1 это первый вариант: при первом рендере юз стейт сделает рассчет,
// при повторном рендере он игнорирует инициализ значение и
// будет к инициал(замеморизированному) прибавлять 1
const generateData=()=>{
    //супер сложный рассчет
    console.log("generateData")
    return 131213215
}

const UseStateWithUseMemo = () => {
    console.log("ExampleWithUseState")
/*const initValue=generateData()*/
    const initValue=useMemo(generateData,[])

    const [counter, setCounter] = useState(initValue)

    const handler=()=>{
        console.log("нажала")
        setCounter(counter + 1)
    }
    return (
        <>
            <button onClick={handler}>+</button>
            {counter}
        </>
    );
};

export default UseStateWithUseMemo;