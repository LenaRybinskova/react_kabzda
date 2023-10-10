import React, {useEffect, useState} from 'react';

// 1 вариант
const KeyTrackerExample = () => {
        console.log('компонента KeyTrackerExample')
        const [text, setText] = useState('')

        useEffect(() => {

            const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setText(state => state + e.key)
            }
            document.addEventListener('keypress', handler)

            return () => {
                window.removeEventListener('keypress', handler)
            }
        }, [])


        return <div>Typed text: {text}</div>;
    }
;

export default KeyTrackerExample;


// 2 вариант, который тоже можно применять
/*
import React, {useEffect, useState} from 'react';

const KeyTrackerExample = () => {
        console.log('компонента KeyTrackerExample')
        const [text, setText] = useState('')

        useEffect(() => {

            const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setText(text + e.key) // тут текст + эвент, но тогда надо в зависимости добавить текст, чтобы стейт обновл
            }
            document.addEventListener('keypress', handler)

            return () => {
                window.removeEventListener('keypress', handler)
            }
        }, [text])


        return <div>Typed text: {text}</div>;
    }
;

export default KeyTrackerExample;*/
