import React, {useEffect, useState} from 'react';


export const UseEffectExampleSetInterval = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        //setInterval будет вызывать коллбек каждую секунду(1000)
        const intervalID = setInterval(() => {
            console.log('setInterval')
            // в setCounter нельзя добавить setCounter(counter +1), он counter возьмет из замыкания и будет всегда показывать 1. Надо в setCounter передать функцию преобразователь
            setCounter(state => state + 1)
        }, 1000)

        // функ зачистки
        return () => {clearInterval(intervalID)}

    }, [])

    return (
        <>
            Hello, counter:{counter} - fake:{fake}
            {/*            <button onClick={()=>setFake(fake + 1)}>fake+</button>
            <button onClick={()=>setCounter(counter + 1)}>counter+</button>*/}
        </>
    );
};

