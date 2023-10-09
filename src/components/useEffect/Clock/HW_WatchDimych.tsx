import React, {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';

type  PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    );
};

export type ClockViewPropsType = {
    date: Date
}


// первоначально часы
/*export const ClockDigital: React.FC<PropsCloclDigitalType> = (props) => {
    console.log('главная компонента')
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('useEffect сработает 1 раз только при первой отрисовке')

        const intervalId = setInterval(() => {
            console.log('setInterval молотит каждую сек получая новую дату и сетая в стейт')
            setDate(new Date())
        }, 1000)

        // вызыв return происх если компон перерис или умирать, чтобы перестал сетИнтервал молотить
        // любой запуск функ setInterval возвращает номер этого интервала(intervalId), его и используем
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const secondsString = getTwoDigits(date.getSeconds())
    const minutesString = getTwoDigits(date.getMinutes())
    const hoursString = getTwoDigits(date.getHours())

    return (
        <div>
            <span>{hoursString}</span>:<span>{minutesString}</span>:<span>{secondsString}</span>
        </div>
    );
};*/