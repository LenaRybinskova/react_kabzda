import React, {useEffect, useState} from 'react';



export const UseEffectExample1 = () => {
    const [counter, setCounter] = useState(1)


    //ЮзЭффект нужен чтобы в его коллбек всякую "грязь" (то что загрядняет чист функуию) засунуть.
    // Ниже самые распространенные загрязнители
    useEffect(()=>{
        console.log("useEffect работает")
        document.title=counter.toString()
        // варианты Сайд Эффектов в коллбек функции
            //api.getUsers().then("" ) - асинхр запрос на сервер
            //setInterval  - асинхр задание интервалов. напрямую нельзя setInterval в компоненте исп, тк это нарушение чистой функции
            //indexedDB - работа с датой базой
            //document.getElementId - редко, но бывает нужно обращ к эл напрмую
            //document.title = "User" - изменение тайта страницы напрямую
    })
    return (
        <>
            Hello, {counter}
            <button onClick={()=>setCounter(counter + 1)}>+</button>
        </>
    );
};

