import React, {useEffect, useState} from 'react';


export const UseEffectExampleSetTimeOut = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        const timeOutID = setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 2000)
// функ зачистки
        return () => {
            clearTimeout(timeOutID)
        }
    }, [counter])

    return (
        <>
            Hello, {counter},{fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    );
};

