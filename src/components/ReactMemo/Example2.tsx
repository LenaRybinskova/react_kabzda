import React, {useMemo, useState} from 'react';

const Example2 = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA=useMemo(()=>{
        let tempResultA=1
        for (let i = 1; i <= a; i++) {
            //это имитация сложного расчета
            let fake =0
            while(fake <10000000){
                fake++;
                const a=Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    // Два способа привести строку к числу:  + или Number()
    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>result for a: {resultA}</div>
            <div>result for b: {resultB}</div>
        </>
    );
};

export default Example2;