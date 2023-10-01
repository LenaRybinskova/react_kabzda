import React, {useMemo, useState} from 'react';




// setCounter  может прнимать и значение, и функцию(функцию аналог редьюсора, которая принимает стейт(counter) и возвращает изменный стейт
const generateData=()=>{
    //супер сложный рассчет
    console.log("generateData")
    return 131213215
}

const UseStateFunction = () => {
    console.log("ExampleWithUseState")

    const [counter, setCounter] = useState(generateData)

const changer=(state:number)=>{
        return state + 1
}

    return (
        <>
{/*            <button onClick={()=>setCounter(changer)}>+</button>*/}
                        <button onClick={()=>setCounter(state=>state +1)}>+</button>
            {counter}
        </>
    );
};

export default UseStateFunction;