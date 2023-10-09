import React, {useEffect, useState} from 'react';

const twoDigitsString = (n: number) => {
    return n < 10 ? `0${n}` : n
}

const HwWatchLena = () => {
    console.log('рендер компоненты')

    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const idInterval = setInterval(() => {setDate(new Date())}, 1000)
        return clearInterval(idInterval)
    }, [])

    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 50,
        fontWeight: 'bold'
    };

    return (
        <div style={style}>
            {twoDigitsString(date.getHours())}:{twoDigitsString(date.getMinutes())}:{twoDigitsString(date.getSeconds())}
        </div>
    );
};

export default HwWatchLena;