import React, {useEffect, useState} from 'react';

// три варианта работы с зависимости
export const UseEffectExample2 = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(()=>{
        console.log("useEffect работает каждый ререндер, тк нет зависимостей")
        document.title=counter.toString()
    })

    useEffect(()=>{
        console.log("useEffect работает только для первого рендера, аналог componentDidMount")
        document.title=counter.toString()
    },[])

    useEffect(()=>{
        console.log("useEffect работает в первый рендер и когда меняется counter")
        document.title=counter.toString()
    },[counter]) // в зависимостях обычно либо стейт, либо то что из пропсов пришло


    return (
        <>
            Hello, {counter},{fake}
            <button onClick={()=>setFake(fake + 1)}>fake+</button>
            <button onClick={()=>setCounter(counter + 1)}>counter+</button>
        </>
    );
};

