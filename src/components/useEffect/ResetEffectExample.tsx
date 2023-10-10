import React, {useEffect, useState} from 'react';

const ResetEffectExample = () => {
        const [counter, setCounter] = useState(1)

        console.log('component rendered with ' + counter)

        useEffect(() => {
            console.log('useEffect '  + counter)

            return ()=>{
                console.log("effect зачистился " + counter)
            }

        }, [counter])

    const increase=()=>{setCounter(counter + 1)}

        return (
            <div>
                Hello, counter : {counter}
                <button onClick={increase}>+</button>
            </div>
        );
    }
;

export default ResetEffectExample;